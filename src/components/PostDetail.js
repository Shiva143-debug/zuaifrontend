

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://honorable-prism-verse.glitch.me/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                setError('Error fetching post');
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="custom-spinner"></div>
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!post) {
        return <p>No post found</p>;
    }

    return (
        <div className="post-details" style={{ overflowY: "auto" }}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <p className="post-author">Written by {post.author || 'Unknown'}</p>
        </div>
    );
};

export default PostDetail;

