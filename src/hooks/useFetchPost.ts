import { useState, useEffect } from 'react';
import { fetchPost, incrementPostViews } from '../utils/postsUtils';
import { PostData } from '../constants/type';

const useFetchPost = (hash: string | undefined) => {
    const [post, setPost] = useState<PostData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostData = async () => {
            if (!hash) return;

            const viewedKey = `viewed_${hash}`;
            const hasViewed = localStorage.getItem(viewedKey);

            try {
                const data = await fetchPost(hash);
                setPost({
                    title: data.title,
                    category: data.category,
                    content: data.content,
                    views: data.views,
                    expirationDate: new Date(data.expirationDate).toLocaleString(),
                });

                if (!hasViewed) {
                    await incrementPostViews(hash);
                    setPost((prevPost) => prevPost && { ...prevPost, views: prevPost.views + 1 });
                    localStorage.setItem(viewedKey, 'true');
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Error fetching post');
            }
        };

        fetchPostData();
    }, [hash]);

    return { post, error };
};

export default useFetchPost;