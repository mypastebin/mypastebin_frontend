import React from 'react';
import styled from 'styled-components';
import { FamilyFontBase } from '../styled/styled';
import { CgProfile } from 'react-icons/cg';
import { FaEye, FaRegStar } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';
import Header from './helper/Header.tsx';

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

const ProfileIcon = styled(CgProfile)`
    width: 5vh;
    height: 5vh;
    color: #ECF0F1;
    margin-right: 1rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Username = styled.h1`
    font-size: 2.5vh;
    color: #ECF0F1;
    ${FamilyFontBase}
`;

const StatsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    color: #BDC3C7;
`;

const StatItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.5vh;
`;

const StatIcon = styled.span`
    margin-right: 0.3rem;
    display: flex;
`;

const DateText = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5vh;
    color: #BDC3C7;
`;

const CalendarIcon = styled(AiOutlineCalendar)`
    margin-right: 0.3rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
    box-sizing: border-box;
    margin-top: 3rem;
`;

const TableHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #2C3E50;
    padding: 1rem;
    border-bottom: 1px solid #34495E;
    box-sizing: border-box;
    border-radius: 5px;
    margin-top: 2rem;
`;

const Column = styled.div`
    flex: 1;
    text-align: left;
    font-size: 1.5vh;
    padding: 0 1rem;
`;

const TableHeader: React.FC = () => {
    return (
        <TableHeaderContainer>
            <Column>Name / Title</Column>
            <Column>Added</Column>
            <Column>Expires</Column>
        </TableHeaderContainer>
    );
};

const ProfilePage: React.FC = () => {
    const creationDate = "8 days ago";  // Example static data
    //TODO: fix header after login
    return (
        <PageContainer>
            <Header />
            <HeaderContainer>
                <ProfileIcon />
                <InfoContainer>
                    <Username>Gleb</Username>
                    <StatsContainer>
                        <StatItem>
                            <StatIcon><FaEye /></StatIcon>
                            <span>5</span>
                        </StatItem>
                        <StatItem>
                            <StatIcon><FaRegStar /></StatIcon>
                            <span>0</span>
                        </StatItem>
                        <StatItem>
                            <CalendarIcon />
                            <DateText>{creationDate}</DateText>
                        </StatItem>
                    </StatsContainer>
                </InfoContainer>
            </HeaderContainer>
            <ContentContainer>
                {/* Table header */}
                <TableHeader />
                {/* Future content goes here */}
            </ContentContainer>
        </PageContainer>
    );
};

export default ProfilePage;
