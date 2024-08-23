import React from 'react';
import './styles.css';

const Header = () => {
    return (
        <header className="header" style={{width: '100%',borderBottom: '1px solid #ddd',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',zIndex: 1000,}}>
            <h1 className="header-title">My Blog</h1>
            <nav className="header-nav">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
