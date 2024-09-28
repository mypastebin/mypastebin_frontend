import React from 'react';
import styled from 'styled-components';
import Header from "./helper/Header.tsx";

const SignUpPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: #1E2A38;
`;

const Title = styled.h1`
    color: #ECF0F1;
    margin-bottom: 8vh;
    margin-top: 10vh;
    font-size: 8vh;
`;

const SocialLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4vh;
`;

const SocialButton = styled.button`
    background-color: #DB4437;
    color: white;
    padding: 1.4vh 3.5vw;
    border: none;
    border-radius: 5px;
    font-size: 1.4vh;
    cursor: pointer;

    &:hover {
        background-color: #c0392b;
    }
`;

const FormContainer = styled.div`
    background-color: #2C3E50;
    padding: 4vh 5vw;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    width: 50%;
    max-width: 40vh;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    color: #ECF0F1;
    margin-bottom: 1vh;
    font-size: 1.6vh;
`;

const Input = styled.input`
    padding: 1.2vh;
    margin-bottom: 1.5vh;
    border: 1px solid #34495E;
    border-radius: 5px;
    background-color: #34495E;
    color: #ECF0F1;
    font-size: 1.6vh;

    &:focus {
        outline: none;
        border-color: #3498DB;
    }
`;

const SignUpButton = styled.button`
    padding: 1.2vh;
    background-color: #3498DB;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.6vh;
    cursor: pointer;

    &:hover {
        background-color: #2980B9;
    }
`;

const SignUpPage: React.FC = () => {
    return (
        <SignUpPageContainer>
            <Header />
            <Title>Sign Up</Title>

            <SocialLoginContainer>
                <SocialButton>Sign in with Google</SocialButton>
            </SocialLoginContainer>

            <FormContainer>
                <Form>
                    <Label htmlFor="username">Username:</Label>
                    <Input id="username" type="text" placeholder="Your username" required />

                    <Label htmlFor="email">Email Address:</Label>
                    <Input id="email" type="email" placeholder="Your email address" required />

                    <Label htmlFor="password">Password:</Label>
                    <Input id="password" type="password" placeholder="Your password" required />

                    <SignUpButton type="submit">Create My Account</SignUpButton>
                </Form>
            </FormContainer>
        </SignUpPageContainer>
    );
};

export default SignUpPage;
