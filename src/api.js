import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/posts/${id}`);
        return response;
    } catch (error) {
        throw error;
    }
};

export const fetchPostDetails = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePost = async (id, postData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/posts/${id}`, postData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/posts`, postData);
        return response;
    } catch (error) {
        throw error;
    }
};

export const fetchComments = async (postId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/comments?postId=${postId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createComment = async (commentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/comments`, commentData);
        return response;
    } catch (error) {
        throw error;
    }
};
