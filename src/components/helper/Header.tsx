import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {API_URLS, CONST} from "../../constants/constants.ts";

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

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate(CONST.BASE_NET);
    };

    const handleLoginClick = () => {
        navigate(API_URLS.LOGIN);
    };

    const handleSignUpClick = () => {
        navigate(API_URLS.SIGNUP);
    };

    return (
        <HeaderContainer>
            <LogoButton onClick={handleLogoClick}>
                MyPasteBin
            </LogoButton>
            <RightSection>
                <Button onClick={handleLoginClick}>Login</Button>
                <SignUpButton onClick={handleSignUpClick}>Sign Up</SignUpButton>
            </RightSection>
        </HeaderContainer>
    );
};

export default Header;
