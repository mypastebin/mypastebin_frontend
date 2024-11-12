export interface Post {
    id?: number;
    title: string;
    category: string;
    content: string;
    expirationDate: string;
    hash: string;
    createdAt: Date;
    views: number;
    fileSize?: number;
}

export interface PostData {
    title: string;
    category: string;
    content: string;
    views: number;
    expirationDate: string;
}

export interface AuthResponseData {
    expires: string;
    token: string;
}

// FIXME
export interface CreatePostData extends Omit<Post, 'hash' | 'createdAt' | 'views'> {}

export interface RecentPostsProps {
    posts: Post[];
}

export interface User {
    id: number;
    createdAt: Date;
    email: string;
    googleId?: string;
    isActive: boolean;
    lastLoginAt?: Date;
    password: string;
    username: string;
    rating: number;
    views: number;
}

export interface LoginData {
    username: string;
    password: string;
}

export interface SignupData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface UserProfile extends Omit<User, 'password'> {
    posts: Post[];
}

export interface UpdateUserProfileData extends Partial<Pick<User, 'username' | 'email' | 'password'>> {}

export interface LoginResponse {
    token: string;
    tokenType?: string;
    expiresIn?: number;
    user: UserProfile;
}
