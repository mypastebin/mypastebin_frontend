import React from 'react';
import styled from 'styled-components';
import Header from './helper/Header.tsx';
import useFetchProfile from '../hooks/useFetchProfile';
import { FaRegUserCircle, FaExternalLinkAlt  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../constants/constants.ts";

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #1E2A38;
    box-sizing: border-box;
    padding: 2rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    background-color: #2C3E50;
    padding: 1rem;
    border-bottom: 1px solid #34495E;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 3rem;
`;

const Username = styled.h1`
    font-size: 2.5vh;
    color: #ECF0F1;
`;

const UserIcon = styled(FaRegUserCircle)`
    width: 2em;
    height: 2em;
    margin-right: 1rem;
    color: #0f508f;
`;

const PostsTable = styled.table`
    width: 80%;
    margin-top: 2rem;
    border-collapse: collapse;
    color: #ECF0F1;
`;

const TableHeader = styled.th`
    border: 1px solid #34495E;
    padding: 1rem;
    background-color: #2C3E50;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #34495E;
    }
`;

const TableCell = styled.td`
    border: 1px solid #34495E;
    padding: 1rem;
    text-align: center;
`;

const ExternalLinkButton = styled(FaExternalLinkAlt)`
    cursor: pointer;
    color: #ECF0F1;
    font-size: 1.5em;

    &:hover {
        color: #61DAFB;
    }
`;

const ProfilePage: React.FC = () => {
    const { profile, error } = useFetchProfile();
    const navigate = useNavigate();

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    const handleNavigate = (hash: string) => {
        navigate(`${ROUTES.POST}/${hash}`);
    };

    return (
        <PageContainer>
            <Header />
            <HeaderContainer>
                <UserIcon />
                <Username>{profile.username}</Username>
            </HeaderContainer>

            {profile.posts && profile.posts.length > 0 ? (
                <PostsTable>
                    <thead>
                    <tr>
                        <TableHeader>ID</TableHeader>
                        <TableHeader>Title</TableHeader>
                        <TableHeader>Content</TableHeader>
                        <TableHeader>Created At</TableHeader>
                    </tr>
                    </thead>
                    <tbody>
                    {profile.posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>
                                <ExternalLinkButton
                                    aria-label="View Post"
                                    onClick={() => handleNavigate(post.hash)}
                                />
                            </TableCell>
                            <TableCell>{new Date(post.createdAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                    </tbody>
                </PostsTable>
            ) : (
                <div>No posts available</div>
            )}
        </PageContainer>
    );
};

export default ProfilePage;
