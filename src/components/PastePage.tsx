// src/components/PastePage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from './helper/Header';
import { CustomScrollbar } from '../styled/styled';
import useFetchPost from '../hooks/useFetchPost';

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
    const { post, error } = useFetchPost(hash);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    };

    if (error) return <PageContainer>Error loading post</PageContainer>;

    return (
        <PageContainer>
            <Header />
            <TitleContainer>
                <Title>{post?.title || 'Loading...'}</Title>
                <InfoContainer>
                    <BaseText>Category: {post?.category || 'Loading...'}</BaseText>
                    <BaseText>Views: {post?.views || 0}</BaseText>
                    <BaseText>Expiration Date: {post?.expirationDate || 'Loading...'}</BaseText>
                </InfoContainer>
            </TitleContainer>
            <PasteContent>
                {post?.content || 'Loading...'}
            </PasteContent>
            <CopyButton onClick={handleCopyLink}>Copy Link</CopyButton>
        </PageContainer>
    );
};

export default PastePage;
