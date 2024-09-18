export const API_URLS = {
    BASE_URL: 'http://localhost:8080/',
    POST: 'api/posts',
    RECENT_POSTS: 'api/posts/recent'
} as const;

export const HEADERS = {
    'Content-Type': 'application/json',
} as const;