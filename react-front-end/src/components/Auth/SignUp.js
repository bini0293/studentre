// src/components/Auth/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Replace this with actual sign-up logic
    if (firstName && lastName && username && password && role) {
      alert('Sign Up successful!');
      navigate('/login');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="First Name"
        className="form-control"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="form-control mt-2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        className="form-control mt-2"
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
      <input
        type="password"
        placeholder="Confirm Password"
        className="form-control mt-2"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
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
      <button className="btn btn-primary mt-2" onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
