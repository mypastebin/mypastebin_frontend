export interface Post {
    title: string;
    category: string;
    content: string;
    expirationDate: string;
    hash: string;
    createdAt: Date;
    views: number;
    fileSize?: number;
}

export interface CreatePostData extends Omit<Post, 'hash' | 'createdAt' | 'views'> {}

export interface RecentPostsProps {
    posts: Post[];
}