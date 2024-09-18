import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
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
`;

const Header: React.FC = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <HeaderContainer>
            <LogoButton onClick={handleLogoClick}>
                MyPasteBin
            </LogoButton>
        </HeaderContainer>
    );
};

export default Header;
