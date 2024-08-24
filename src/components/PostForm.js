
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const post = location.state?.post || {};
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name') || location.state?.name || "";

    const [title, setTitle] = useState(post.title || '');
    const [content, setContent] = useState(post.content || '');
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(!!post.id);

    useEffect(() => {
        setIsEditing(!!post.id);
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setError('Title field is required');
            return;
        }
        if (!content) {
            setError('Content field is required');
            return;
        }

        try {
            console.log(name)
            if (isEditing) {
                await axios.put(`https://honorable-prism-verse.glitch.me/posts/${post.id}`, { name, title, content });
                alert('Post updated successfully!');
            } else {
                await axios.post('https://honorable-prism-verse.glitch.me/posts', { name, title, content });
                alert('Post created successfully!');
            }
            navigate('/');
        } catch (error) {
            setError('Error submitting post');
        }
    };

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2 className="post-form-title">{isEditing ? 'Edit Post' : 'Create a New Post'}</h2>
            <div className="post-form-group">
                <label className="post-form-label">Title:</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="post-form-input form-control" name="title" value={title} />
            </div>
            <div className="post-form-group">
                <label className="post-form-label">Content:</label>
                <textarea onChange={(e) => setContent(e.target.value)} className="post-form-textarea form-control" name="content" value={content}></textarea>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="post-form-button">Submit</button>
        </form>
    );
};

export default PostForm;
