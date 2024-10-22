import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from "./helper/Header";
import Paste from "./helper/Paste";
import RecentPosts from "./RecentPosts";
import { FamilyFontBase } from "../styled/styled";
import { createPost, fetchRecentPosts } from '../utils/postsUtils.ts';
import { CreatePostData, Post } from '../constants/type';

const PageContainer = styled.div`
    margin: 0;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: #1E2A38;
    box-sizing: border-box;
    padding-left: 10vh;
    padding-right: 10vh;
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
`;

const PasteSettingsContainer = styled.div`
    width: 30%;
    background-color: #2C3E50;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(36, 52, 86, 0.5);
    margin-bottom: 10px;
`;

const PasteSettingsHeader = styled.div`
    font-weight: bold;
    color: #ECF0F1;
    font-size: 18px;
    margin-bottom: 10px;
`;

const SettingsGroup = styled.div`
    margin-bottom: 10px;
`;

const Label = styled.label`
    font-size: 14px;
    color: #ECF0F1;
    margin-bottom: 5px;
    display: block;
`;

const Input = styled.input`
    width: 97%;
    padding: 8px;
    border-radius: 5px;
    background-color: #34495E;
    color: #ECF0F1;
    border: none;
    font-size: 14px;
    ${FamilyFontBase}

    &:focus {
        outline: none;
        border: 1px solid #606365;
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    background-color: #34495E;
    color: #ECF0F1;
    border: none;
    font-size: 14px;

    &:focus {
        outline: none;
        border: 1px solid #606365;
    }
`;

const CreateButton = styled.button`
    background-color: #3498DB;
    color: #ECF0F1;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;

    &:hover {
        background-color: #2980B9;
    }
`;

const categories = ["None", "Programming", "Text", "Markdown"];
const expirations = ["Never", "10 Minutes", "1 Hour", "1 Day", "1 Week"];

const MainPage: React.FC = () => {
    const navigate = useNavigate(); // Используйте useNavigate

    const [pasteName, setPasteName] = useState('');
    const [category, setCategory] = useState('none');
    const [expiration, setExpiration] = useState('never');
    const [content, setContent] = useState('');
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadRecentPosts = async () => {
            try {
                const posts = await fetchRecentPosts();
                setRecentPosts(posts);
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            }
        };

        loadRecentPosts();
    }, []);

    const convertExpirationToDate = (expiration: string): string => {
        const now = new Date();
        let expirationDate: Date;

        switch (expiration) {
            case "10minutes":
                expirationDate = new Date(now.getTime() + 10 * 60000);
                break;
            case "1hour":
                expirationDate = new Date(now.getTime() + 60 * 60000);
                break;
            case "1day":
                expirationDate = new Date(now.getTime() + 24 * 60 * 60000);
                break;
            case "1week":
                expirationDate = new Date(now.getTime() + 7 * 24 * 60 * 60000);
                break;
            case "never":
            default:
                expirationDate = new Date(Date.UTC(9999, 11, 31, 23, 59, 59));
                break;
        }

        return expirationDate.toISOString().slice(0, 19) + 'Z';
    };

    const handleSubmit = async () => {
        const expirationDate = convertExpirationToDate(expiration);

        const pasteData: CreatePostData = {
            title: pasteName,
            category,
            content,
            expirationDate
        };

        const token = localStorage.getItem('token');
        if (token) {
            console.log('Authorization Header:', `Bearer ${JSON.parse(token)}`);
        } else {
            console.log('No Authorization Token Found');
        }

        console.log('Submitting Post Data:', pasteData);

        try {
            const createdPost = await createPost(pasteData);
            console.log('Created Post:', createdPost);
            navigate(`/api/posts/${createdPost.hash}`);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <PageContainer>
            <Header />
            <ContentContainer>
                <Paste setContent={setContent} /> {}
                <RecentPosts posts={recentPosts} />
            </ContentContainer>
            <PasteSettingsContainer>
                <PasteSettingsHeader>Optional Paste Settings</PasteSettingsHeader>
                <SettingsGroup>
                    <Label htmlFor="pasteName">Paste Name / Title:</Label>
                    <Input
                        id="pasteName"
                        type="text"
                        placeholder="Enter paste name or title"
                        value={pasteName}
                        onChange={(e) => setPasteName(e.target.value)}
                    />
                </SettingsGroup>
                <SettingsGroup>
                    <Label htmlFor="category">Category:</Label>
                    <Select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((category, index) => (
                            <option key={index} value={category.toLowerCase()}>
                                {category}
                            </option>
                        ))}
                    </Select>
                </SettingsGroup>
                <SettingsGroup>
                    <Label htmlFor="expiration">Paste Expiration:</Label>
                    <Select
                        id="expiration"
                        value={expiration}
                        onChange={(e) => setExpiration(e.target.value)}
                    >
                        {expirations.map((expiration, index) => (
                            <option key={index} value={expiration.toLowerCase().replace(" ", "")}>
                                {expiration}
                            </option>
                        ))}
                    </Select>
                </SettingsGroup>
                <CreateButton onClick={handleSubmit}>Create New Paste</CreateButton>
            </PasteSettingsContainer>
        </PageContainer>
    );
};

export default MainPage;
