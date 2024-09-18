import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RecentPostsProps } from '../constants/type.ts';
import { CustomScrollbar } from "../styled/styled.tsx";
import { format } from 'date-fns';
import { API_URLS } from '../constants/constants.ts';

const PostsContainer = styled.div`
    width: 25%;
    height: 80%;
    background-color: #2C3E50;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(36, 52, 86, 0.5);
    display: flex;
    flex-direction: column;
    margin-right: 10vh;
`;

const Header = styled.div`
    font-weight: bold;
    color: #ECF0F1;
    font-size: 18px;
    margin-bottom: 17px;
`;

const PostsList = styled.div`
    flex: 1;
    overflow-y: auto;
    margin-top: -10px;
    ${CustomScrollbar}
`;

const PostItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #34495E;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 5px;
    color: #ECF0F1;
    cursor: pointer;

    &:hover {
        background-color: #3B556E;
    }
`;

const PostName = styled.div`
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
`;

const PostInfo = styled.div`
    font-size: 12px;
    text-align: left;
    margin-top: 5px;
`;

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {

    useEffect(() => {
    }, [posts]);

    return (
        <PostsContainer>
            <Header>Recent Posts</Header>
            <PostsList>
                {posts.map((post) => {
                    return (
                        <Link
                            to={`${API_URLS.POST}/${post.hash}`}
                            key={post.hash}
                            style={{ textDecoration: 'none' }}
                        >
                            <PostItem>
                                <PostName>
                                    {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
                                </PostName>
                                <PostInfo>
                                    {post.fileSize !== undefined
                                        ? `${(post.fileSize / 1024).toFixed(2)} KB`
                                        : 'Size unknown'}
                                    • {format(new Date(post.createdAt), 'dd.MM.yyyy, HH:mm:ss')}
                                </PostInfo>
                            </PostItem>
                        </Link>
                    );
                })}
            </PostsList>
        </PostsContainer>
    );
};

export default RecentPosts;
