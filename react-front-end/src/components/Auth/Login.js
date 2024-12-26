// src/components/Auth/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with actual authentication logic
    if (username && password && role) {
      setUserRole(role); // Set the role in state
      navigate(`/${role}-dashboard`); // Redirect based on role
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="form-control"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="form-control mt-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        className="form-control mt-2"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="administrator">Administrator</option>
        <option value="faculty">Faculty</option>
        <option value="head">Head</option>
      </select>
      <button className="btn btn-primary mt-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
