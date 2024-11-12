import { useNavigate } from 'react-router-dom';
import { createPost } from '../utils/postsUtils';
import { CreatePostData } from '../constants/type';
import convertExpirationToDate from '../utils/dateUtils';

const useSubmitPost = () => {
    const navigate = useNavigate();

    const handleSubmit = async (
        pasteName: string,
        category: string,
        expiration: string,
        content: string
    ) => {
        const expirationDate = convertExpirationToDate(expiration);

        const pasteData: CreatePostData = {
            title: pasteName,
            category,
            content,
            expirationDate,
        };

        console.log('Submitting Post Data:', pasteData);

        try {
            const createdPost = await createPost(pasteData);
            console.log('Created Post:', createdPost);
            navigate(`/api/posts/${createdPost.hash}`);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return handleSubmit;
};

export default useSubmitPost;