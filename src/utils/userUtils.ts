import { API_URLS } from '../constants/constants';
import { getApiUrl, postRequest, getRequest } from './baseUtils';
import {LoginData, RegisterData, UserProfile, UpdateUserProfileData, LoginResponse} from '../constants/type';

export async function loginUser(loginData: LoginData): Promise<LoginResponse> {
    const apiUrl = getApiUrl(API_URLS.LOGIN);
    return postRequest<LoginResponse>(apiUrl, loginData);
}


export async function registerUser(registerData: RegisterData): Promise<string> {
    const apiUrl = getApiUrl(API_URLS.SIGNUP);
    return postRequest<string>(apiUrl, registerData);
}

export async function updateUserProfile(updateData: UpdateUserProfileData): Promise<UserProfile> {
    const apiUrl = getApiUrl(API_URLS.PROFILE);
    return postRequest<UserProfile>(apiUrl, updateData);
}

export async function fetchUserProfile(token: string): Promise<UserProfile> {
    const apiUrl = getApiUrl(API_URLS.PROFILE);

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };

    return getRequest<UserProfile>(apiUrl, headers);
}
