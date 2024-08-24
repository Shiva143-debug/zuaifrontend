import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import Footer from './Footer';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const name = localStorage.getItem('userName') || '';
    console.log(name)

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

    useEffect(() => {
        fetchPosts();
    }, []);

    const onDelete=async(id)=>{
        try {
            const response = await axios.delete(`https://honorable-prism-verse.glitch.me/posts/${id}`);
            console.log(response)
            alert("blog deleted successfully")
            await fetchPosts();
        } catch (error) {
            setError('Error fetching posts');
            alert("blog not deleted")
        }
       
    }

 
    const onUpdate = (post) => {
        navigate('/new-post', { state: { post,name } }); 
    };

    if (error) return <p>{error}</p>;

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (

        <>
            <div class=" bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5 align-items-end">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated slideInDown">Welcome to My Blog: Insights, Ideas, and Inspiration</h1>
                            <p class="text-white pb-3 animated slideInDown">Explore a world of fresh perspectives and thoughtful content on my newly launched blog. Dive into articles on topics that matter, from tech trends to creative pursuits, all designed to inspire and inform</p>
                            <a href={`/new-post?name=${encodeURIComponent(name)}`}  class="btn btn-warning text-white py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Create New Post</a>

                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid animated zoomIn " src="../images/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <input type="text" placeholder="Search posts..." value={searchQuery} onChange={handleSearchChange} className="form-control mb-4"/>
            </div>

            {loading &&

                <div className="spinner-container">
                    <div className="custom-spinner"></div>
                </div>
                
                }
                {!loading &&

                    <div style={{ display: "flex", flexWrap: "wrap" }} className='mx-5'>

                        {filteredPosts.map(post => (
                            <div class="service-item d-flex flex-column  rounded">
                                <h5 className="mb-3">{post.title}</h5>
                                <p className="m-0">{post.content.substring(0, 60)}...</p>
                                <a className="btn btn-square" href={`/posts/${post.id}`}><FontAwesomeIcon icon={faArrowRight} /></a>
                                <div style={{display:"flex",justifyContent:"flex-end"}}>
                                <BsPencilSquare onClick={() => onUpdate(post)} className='d-u-icon'/>
                                <MdOutlineDeleteOutline onClick={() => onDelete(post.id)}  className='d-u-icon'/>
                                </div>
                            </div>
                        ))}
                    </div>
            }
                <Footer />
        </>
    );
};

export default PostList;
