import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://honorable-prism-verse.glitch.me/posts');
                setPosts(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching posts');
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);


    if (error) return <p>{error}</p>;

    return (

<>
        {loading &&

            <div className="spinner-container">
                <div className="custom-spinner"></div>
            </div>}
        <div className="post-list">
            
            {posts.map(post => (
                <div key={post.id} className="post-list-item">
                    <h3 className="post-list-title">{post.title}</h3>
                    <p className="post-list-summary">{post.content.substring(0, 100)}...</p>
                    <a href={`/posts/${post.id}`} className="post-list-link">Read more</a>
                </div>
            ))}
        </div>
        </>
    );
};

export default PostList;
