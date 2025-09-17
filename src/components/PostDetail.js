

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import CommentSection from './CommentSection';

// const PostDetail = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const getPosts = async () => {
//             try {
//                 const data = await fetchPosts();
//                 setPosts(data);
//                 setLoading(false);
//             } catch (error) {
//                 setError('Error fetching posts');
//                 setLoading(false);
//             }
//         };

//         getPosts();
//     }, []);

//     if (loading) {
//         return (
//             <div className="spinner-container">
//                 <div className="custom-spinner"></div>
//             </div>
//         );
//     }

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!post) {
//         return <p>No post found</p>;
//     }

//     return (
//         <div className="post-details" >
//             <h2 className="post-title">{post.title}</h2>
//             <p className="post-content">{post.content}</p>
//             <p className="post-author">Written by {post.name || 'Unknown'}</p>
//             <CommentSection postId={post.id} />
//         </div>
//     );
// };

// export default PostDetail;

