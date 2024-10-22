import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './helper/Header.tsx';
import { fetchUserProfile } from '../utils/userUtils'; // Импортируем функцию для запроса профиля
import { UserProfile } from '../constants/type'; // Импортируем типы для профиля

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

const ProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProfile = async () => {
            const token = JSON.parse(localStorage.getItem('token'));
            console.log('Token from localStorage:', token);

            if (!token) {
                setError('User not authenticated');
                return;
            }

            try {
                const profileData = await fetchUserProfile(token);
                setProfile(profileData);
            } catch (error) {
                console.error('Error fetching profile:', error);
                setError('Could not load profile');
            }
        };

        loadProfile();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <PageContainer>
            <Header />
            <HeaderContainer>
                <Username>{profile.username}</Username>
            </HeaderContainer>
            {/* Тут можно добавить отображение постов пользователя */}
        </PageContainer>
    );
};

export default ProfilePage;
