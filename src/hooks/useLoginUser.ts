import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/userUtils';
import { API_URLS } from '../constants/constants';
import { LoginData } from "../constants/type";
import { getAuthHeaders } from '../utils/basicUtils';

const useLoginUser = () => {
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (loginData: LoginData) => {
        setError('');

        try {
            const response = await loginUser(loginData);
            console.log('Login response:', response);
            console.log('HEADER: ', getAuthHeaders());

            alert('Login successful! Redirecting to your profile.');
            navigate(`/${API_URLS.PROFILE}`);
        } catch (error: unknown) {
            console.error('Login error:', error);
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('Error occurred during login. Please try again.');
            }
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = `${API_URLS.BASE_URL}${API_URLS.GOOGLE_LOGIN}`;
    };

    return {
        handleLogin,
        handleGoogleLogin,
        error,
    };
};

export default useLoginUser;
