import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import "./App.css"

import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <nav className='nav-items'>
        <Link to="/">Home </Link> | <Link to="/new-post">New Post</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/new-post" element={<PostForm />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
