import { useState, useEffect } from 'react';
import { fetchRecentPosts } from '../utils/postsUtils';
import { Post } from '../constants/type';

const useLoadRecentPosts = () => {
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadRecentPosts = async () => {
            try {
                const posts = await fetchRecentPosts();
                setRecentPosts(posts);
            } catch (error) {
                console.error('Error fetching recent posts:', error);
            }
        };

        loadRecentPosts();
    }, []);

    return recentPosts;
};

export default useLoadRecentPosts;