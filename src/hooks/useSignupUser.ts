import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/userUtils';
import { API_URLS } from '../constants/constants';
import {SignupData} from "../constants/type.ts";

const useSignupUser = () => {
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSignUp = async (signupData: SignupData) => {
        const { username, email, password, confirmPassword } = signupData;

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await registerUser({ username, email, password, confirmPassword });
            alert('Registration successful! You can now log in.');
            navigate(`/${API_URLS.LOGIN}`);
        } catch (error: any) {
            console.error('Registration error:', error);
            setError(error?.message || 'Error occurred during registration, please try again.');
        }
    };

    const handleGoogleSignUp = () => {
        window.location.href = `${API_URLS.BASE_URL}${API_URLS.GOOGLE_LOGIN}`;
    };

    return {
        handleSignUp,
        handleGoogleSignUp,
        error,
    };
};

export default useSignupUser;