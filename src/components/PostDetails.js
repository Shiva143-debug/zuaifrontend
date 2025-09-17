import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../api';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const data = await fetchPostDetails(id);
                setPost(data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching post details');
                setLoading(false);
            }
        };

        getPostDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetails;
