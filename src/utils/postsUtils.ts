import {API_URLS} from "../constants/constants.ts";
import {getApiUrl, getRequest, postRequest} from "./basicUtils.ts";
import {CreatePostData, Post} from "../constants/type.ts";


export async function fetchRecentPosts(): Promise<Post[]> {
    const apiUrl = getApiUrl(API_URLS.POST);
    return getRequest<Post[]>(`${apiUrl}/recent`);
}

export async function createPost(postData: CreatePostData): Promise<Post> {
    const apiUrl = getApiUrl(API_URLS.POST);
    return postRequest<Post>(apiUrl, postData);
}

export async function fetchPost(hash: string): Promise<Post> {
    const apiUrl = getApiUrl(`${API_URLS.POST}/${hash}`);
    return getRequest<Post>(apiUrl);
}

export async function incrementPostViews(hash: string): Promise<void> {
    const apiUrl = getApiUrl(`${API_URLS.POST}/${hash}/increment-views`);
    return postRequest<void>(apiUrl, {});
}