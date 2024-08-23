import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            setError('Title Feild is required');
            return;
        }
        if (!content) {
            setError('Content Feild is required');
            return;
        }

        try {
            await axios.post('https://honorable-prism-verse.glitch.me/posts', { title, content });
            setTitle('');
            setContent('');
            setError(null);
            alert('Post created successfully!');
        } catch (error) {
            setError('Error creating post');
        }
    };


    return (

        <form className="post-form" onSubmit={handleSubmit}>
            <h2 className="post-form-title">Create a New Post</h2>
            <div className="post-form-group">
                <label className="post-form-label">Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="post-form-input form-control" name="title" />
            </div>
            <div className="post-form-group">
                <label className="post-form-label">Content</label>
                <textarea onChange={(e) => setContent(e.target.value)} className="post-form-textarea form-control" name="content" ></textarea>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="post-form-button">Submit</button>
        </form>

    );
};

export default PostForm;
