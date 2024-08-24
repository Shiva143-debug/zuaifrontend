import React from 'react';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import "./App.css"

import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Layout from './Layout';

function App() {
  return (

    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/new-post" element={<PostForm />} />
        </Route>
    </Routes>
</BrowserRouter>

  );
}

export default App;
