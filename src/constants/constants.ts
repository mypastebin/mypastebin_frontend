export const API_URLS = {
    BASE_URL: 'http://localhost:8080/',
    POST: 'api/posts',
    RECENT_POSTS: 'api/posts/recent',
    LOGIN: 'api/auth/login',
    SIGNUP: 'api/auth/signup',
    PROFILE: 'api/profile'
} as const;

export const CONST = {
    BASE_NET: '/',
} as const;

export const HEADERS = {
    'Content-Type': 'application/json',
} as const;