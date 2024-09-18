import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchPost, incrementPostViews } from '../utils/postsUtils.ts';
import Header from "./helper/Header.tsx";
import {CustomScrollbar} from "../styled/styled.tsx";

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

const TitleContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    color: #ECF0F1;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin: 0;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    
`;

const BaseText = styled.p`
    font-size: 14px;
    margin: 0;
    color: #BDC3C7;
    display: flex;
    align-items: center;
    
`;

const PasteContent = styled.div`
    width: 60%;
    height: 50vh;
    overflow-y: auto;
    background-color: #2C3E50;
    padding: 15px;
    border-radius: 5px;
    color: #ECF0F1;
    white-space: pre-wrap;
    word-wrap: break-word;
    ${CustomScrollbar}
`;

const CopyButton = styled.button`
    background-color: #3498DB;
    color: #ECF0F1;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        background-color: #2980B9;
    }
`;

const PastePage: React.FC = () => {
    const { hash } = useParams<{ hash: string }>();
    const [pasteTitle, setPasteTitle] = useState('Loading...');
    const [pasteCategory, setPasteCategory] = useState('');
    const [pasteContent, setPasteContent] = useState('');
    const [pasteViews, setPasteViews] = useState(0);
    const [pasteExpirationDate, setPasteDate] = useState('');

    useEffect(() => {
        const fetchPasteData = async () => {
            if (!hash) return;

            const viewedKey = `viewed_${hash}`;
            const hasViewed = localStorage.getItem(viewedKey);

            try {
                const data = await fetchPost(hash);
                setPasteTitle(data.title);
                setPasteCategory(data.category);
                setPasteContent(data.content);
                setPasteViews(data.views);
                setPasteDate(new Date(data.expirationDate).toLocaleString());

                if (!hasViewed) {
                    await incrementPostViews(hash);
                    setPasteViews((prevViews) => prevViews + 1);
                    localStorage.setItem(viewedKey, 'true');
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPasteData();
    }, [hash]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    return (
        <PageContainer>
            <Header />
            <TitleContainer>
                <Title>{pasteTitle}</Title>
                <InfoContainer>
                    <BaseText>Category: {pasteCategory}</BaseText>
                    <BaseText>Views: {pasteViews}</BaseText>
                    <BaseText>Expiration Date: {pasteExpirationDate}</BaseText>
                </InfoContainer>
            </TitleContainer>
            <PasteContent>
                {pasteContent}
            </PasteContent>
            <CopyButton onClick={handleCopyLink}>Copy Link</CopyButton>
        </PageContainer>
    );
};

export default PastePage;
