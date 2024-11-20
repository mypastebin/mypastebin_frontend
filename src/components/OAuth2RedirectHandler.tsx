import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from "../constants/constants.ts";
import {isTokenValid, storeAuthData} from "../utils/basicUtils.ts";
import { AuthResponseData } from '../constants/type.ts';

const OAuth2RedirectHandler: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            const expires = new Date(Date.now() + 3600 * 1000).toISOString();
            const authResponseData: AuthResponseData = {
                token,
                expires
            };
            storeAuthData(authResponseData);

            navigate(ROUTES.PROFILE);
        } else {
            console.error('Token not found in redirect URL');
            if (isTokenValid()) {
                console.log('Token is already stored and valid, navigating to profile');
                navigate(ROUTES.PROFILE);
            } else {
                console.log('Token is not valid, navigating to login');
                navigate(ROUTES.LOGIN);
            }
        }
    }, []);

    return null;
};

export default OAuth2RedirectHandler;
