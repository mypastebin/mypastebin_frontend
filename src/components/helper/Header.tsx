import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { API_URLS, CONST } from "../../constants/constants.ts";
import { FaUserCircle } from 'react-icons/fa';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1a2531;
    padding: 10px 20px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const LogoButton = styled.button`
    background-color: transparent;
    font-size: 25px;
    font-weight: bold;
    border: none;
    padding: 0;
    cursor: pointer;
    color: #ECF0F1;
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 5vh;
`;

const Button = styled.button`
    background-color: transparent;
    color: #ECF0F1;
    padding: 5px 15px;
    border: 1px solid #ECF0F1;
    border-radius: 5px;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        background-color: #ECF0F1;
        color: #1a2531;
    }
`;

const SignUpButton = styled(Button)`
    background-color: #ffffff;
    color: #1a2531;
    font-weight: bold;

    &:hover {
        background-color: #ECF0F1;
    }
`;

const UserIcon = styled(FaUserCircle)`
    color: #ECF0F1;
    font-size: 30px;
    cursor: pointer;
    margin-left: 20px;
`;

const DropdownMenu = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    background-color: #2C3E50;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const DropdownItem = styled.div`
    padding: 10px;
    color: #ECF0F1;
    cursor: pointer;
    &:hover {
        background-color: #34495E;
    }
`;

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Состояние авторизации
    const [showDropdown, setShowDropdown] = useState(false); // Для управления выпадающим меню

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogoClick = () => {
        navigate(CONST.BASE_NET);
    };

    const handleLoginClick = () => {
        navigate(`/${API_URLS.LOGIN}`);
    };

    const handleSignUpClick = () => {
        navigate(`/${API_URLS.SIGNUP}`);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate(`/${API_URLS.LOGIN}`);
        console.log("Log out + token: " + localStorage.getItem('token'));
    };

    const handleProfileClick = () => {
        navigate(`/${API_URLS.PROFILE}`);
    };

    return (
        <HeaderContainer>
            <LogoButton onClick={handleLogoClick}>
                MyPasteBin
            </LogoButton>
            <RightSection>
                {!isLoggedIn ? (
                    <>
                        <Button onClick={handleLoginClick}>Login</Button>
                        <SignUpButton onClick={handleSignUpClick}>Sign Up</SignUpButton>
                    </>
                ) : (
                    <>
                        <UserIcon onClick={() => setShowDropdown(!showDropdown)} />
                        {showDropdown && (
                            <DropdownMenu>
                                <DropdownItem onClick={handleProfileClick}>Profile</DropdownItem>
                                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                            </DropdownMenu>
                        )}
                    </>
                )}
            </RightSection>
        </HeaderContainer>
    );
};

export default Header;
