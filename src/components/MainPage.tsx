// src/components/MainPage.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { FamilyFontBase } from '../styled/styled';
import Header from './helper/Header';
import Paste from './helper/Paste';
import RecentPosts from './RecentPosts';
import useLoadRecentPosts from '../hooks/useLoadRecentPosts';
import useSubmitPost from '../hooks/useSubmitPost';

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
    const [pasteName, setPasteName] = useState('');
    const [category, setCategory] = useState('none');
    const [expiration, setExpiration] = useState('never');
    const [content, setContent] = useState('');

    const recentPosts = useLoadRecentPosts();
    const handleSubmit = useSubmitPost();

    return (
        <PageContainer>
            <Header />
            <ContentContainer>
                <Paste setContent={setContent} />
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
                <CreateButton
                    onClick={() => handleSubmit(pasteName, category, expiration, content)}
                >
                    Create New Paste
                </CreateButton>
            </PasteSettingsContainer>
        </PageContainer>
    );
};

export default MainPage;
