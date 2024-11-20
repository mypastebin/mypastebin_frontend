export const API_URLS = {
    BASE_URL: 'http://localhost:8080/',
    POST: 'api/posts',
    RECENT_POSTS: 'api/posts/recent',
    LOGIN: 'api/auth/login',
    SIGNUP: 'api/auth/signup',
    GOOGLE_LOGIN: 'oauth2/authorization/google',
    PROFILE: 'api/profile'
} as const;

export const ROUTES = {
    BASE_NET: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    PROFILE: '/profile',
    OAUTH2_REDIRECT: '/oauth2/redirect'
} as const;

export const HEADERS = {
    'Content-Type': 'application/json',
} as const;

export const LOCAL_STORAGE_KEYS = {
    EXPIRES: 'expires',
    TOKEN: 'token',
} as const;