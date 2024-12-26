// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; // Import your PrivateRoute

import Home from './components/Home';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import StudentDashboard from './components/student/StudentDashboard';
import AdminDashboard from './components/Adminstrator/AdminDashboard';
import FacultyDashboard from './components/Faculty/FacultyDashboard';
import HeadDashboard from './components/head/HeadDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes */}
        <PrivateRoute path="/student-dashboard" element={<StudentDashboard />} />
        <PrivateRoute path="/admin-dashboard" element={<AdminDashboard />} />
        <PrivateRoute path="/faculty-dashboard" element={<FacultyDashboard />} />
        <PrivateRoute path="/head-dashboard" element={<HeadDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
