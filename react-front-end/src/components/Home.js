// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <h2>Welcome to the Student Management System</h2>
      <div>
        <Link to="/Login" className="btn btn-primary">Login</Link>
        <Link to="/SignUp" className="btn btn-secondary ms-2">Sign Up</Link>
      </div>
    </div>
  );
};

export default Home;
