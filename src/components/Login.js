
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("login successfully")
        localStorage.setItem('userName', name); 
        console.log(name)

        navigate('/', { state: { name } }); 
        
    };

    const removeName=()=>{
        localStorage.removeItem('userName');
    }

    return (

        <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
            <input type="password" className='form-control'value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
            <a href='/' onClick={removeName} className="skip-link">Skip for Now</a>
        </form>
    </div>
    );
};

export default Login;
