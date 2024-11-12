import { API_URLS } from '../constants/constants';
import {getApiUrl, postRequest, getRequest, putRequest} from './basicUtils';
import {
    LoginData,
    SignupData,
    UserProfile,
    UpdateUserProfileData,
    LoginResponse,
} from '../constants/type';
import { storeAuthData } from './basicUtils';

export async function loginUser(loginData: LoginData): Promise<LoginResponse> {
    const apiUrl = getApiUrl(API_URLS.LOGIN);
    const response = await postRequest<LoginResponse>(apiUrl, loginData);

    if (response && response.token) {
        let expires = '';
        if (response.expiresIn) {
            expires = new Date(Date.now() + response.expiresIn * 1000).toISOString();
        } else {
            expires = new Date(Date.now() + 3600 * 1000).toISOString(); // 1 hour
        }

        storeAuthData({ token: response.token, expires });
    }

    return response;
}

export async function registerUser(signupData: SignupData): Promise<string> {
    const apiUrl = getApiUrl(API_URLS.SIGNUP);
    return postRequest<string>(apiUrl, signupData);
}

export async function updateUserProfile(
    updateData: UpdateUserProfileData
): Promise<UserProfile> {
    const apiUrl = getApiUrl(API_URLS.PROFILE);
    return putRequest<UserProfile>(apiUrl, updateData);
}

export async function fetchUserProfile(): Promise<UserProfile> {
    const apiUrl = getApiUrl(API_URLS.PROFILE);
    return getRequest<UserProfile>(apiUrl);
}
