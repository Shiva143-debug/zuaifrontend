import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './styles.css';

const Header = () => {
    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (

        <header className="header" style={{ width: '100%', borderBottom: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
            <h1 className="header-title" style={{ margin: 0 }}>My Blog</h1>
            <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <a href="/">Home</a>
                {userName ? (
                    <>
                        <span ><CgProfile />{userName}</span>
                        <button onClick={handleLogout} className="logout-button" style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px' }}>Logout</button>
                    </>
                ) : (
                    <a href="/login" className="login-button" style={{ padding: '5px 10px', border: '1px solid #ddd', borderRadius: '4px' }}>Login</a>
                )}
            </nav>
        </header>
    );
};

export default Header;
