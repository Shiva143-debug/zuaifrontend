// CommentSection.js
import React, { useState, useEffect } from 'react';
import { fetchComments, createComment, deleteComment } from '../api';
import './styles.css';

const CommentSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showComments, setShowComments] = useState(false)

    const fetchAllComments = async () => {
        try {
            const data = await fetchComments(postId);
            setComments(data);
            setLoading(false);
        } catch (error) {
            setError('Error fetching comments');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllComments();
    }, [postId]);

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            await createComment({ postId: postId, text: newComment });
            setNewComment('');
            await fetchAllComments();
        } catch (error) {
            setError('Error creating comment');
        }
    };

    const handleCommentDelete = async (commentId) => {
        try {
            await deleteComment(commentId);
            await fetchAllComments();
            alert("Comment Deleted")
        } catch (error) {
            setError('Error deleting comment');
        }
    };

    const onShowComments = () => {
        setShowComments(true)
    }

    const onHideComments = () => {
        setShowComments(false)
    }
    if (error) return <p>{error}</p>;

    return (

        <div className="comment-section mt-4">
            <h5>Comments:</h5>
            {!showComments ? (
                <button className='btn btn-primary' onClick={onShowComments}>Show Comments</button>
            ) : (
                <>
                    <button className='btn btn-primary' onClick={onHideComments}>Hide Comments</button>
                    {loading ? (
                        <div className="spinner-container">
                            <div className="custom-spinner"></div>
                        </div>
                    ) : (
                        <div>
                            <ul className="list-unstyled">
                                {comments.map(comm => (
                                    <>
                                        <li key={comm.id} className="d-flex justify-content-between align-items-center mb-2">
                                            <div>
                                                <p style={{fontSize:"24px"}}>{comm.text}</p>
                                                <small>{new Date(comm.created_at).toISOString().split('T')[0]}</small>
                                            </div>
                                            <button onClick={() => handleCommentDelete(comm.id)} className="btn btn-danger btn-sm">Delete</button>
                                        </li>
                                        <hr />
                                    </>

                                ))}
                            </ul>

                        </div>
                    )}
                </>
            )}

            <form onSubmit={handleCommentSubmit} className="mt-3">
                <div className="form-group">
                    <textarea rows="3" value={newComment} onChange={handleCommentChange} className="form-control" placeholder="Add a comment..." />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>

    );
};

export default CommentSection;
