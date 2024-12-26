import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // If you want to post data to an API

const RegisterDashboard = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    id: "", // Only ID and department fields are necessary
    department: "",
  });
  const { id, department } = student;

  // List of departments
  const departments = [
    "Computer Science",
    "Software Engineering",
    "Information Technology",
  ];

  const handleInputChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Post student registration data to an API (or handle as needed)
    await axios.post("http://localhost:8080/students", student);
    
    // After successful registration, navigate to the payment page
    navigate("/payment");
  };

  return (
    <div className="container mt-5" style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#343a40" }}>Register Dashboard</h2>
      <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "20px", color: "#6c757d" }}>
        Manage student registrations here.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-5">
          <label htmlFor="id" style={{ fontWeight: "bold", color: "#495057" }}>Student ID</label>
          <input
            type="text"
            name="id"
            id="id"
            className="form-control"
            required
            value={id}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ced4da",
              fontSize: "1rem",
            }}
          />
        </div>

        <div className="form-group mb-5">
          <label htmlFor="department" style={{ fontWeight: "bold", color: "#495057" }}>Department</label>
          <select
            name="department"
            id="department"
            className="form-control"
            required
            value={department}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ced4da",
              fontSize: "1rem",
            }}
          >
            <option value="">Select a department</option>
            {departments.map((dep, index) => (
              <option key={index} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>

        <div className="row mb-5">
          <div className="col-sm-6">
            <button
              type="submit"
              className="btn btn-success btn-lg btn-block"
              style={{
                backgroundColor: "#28a745",
                color: "white",
                fontSize: "1.2rem",
                padding: "12px",
                borderRadius: "5px",
                border: "none",
              }}
            >
              Register
            </button>
          </div>

          <div className="col-sm-6">
            <button
              type="button"
              className="btn btn-warning btn-lg btn-block"
              style={{
                backgroundColor: "#ffc107",
                color: "white",
                fontSize: "1.2rem",
                padding: "12px",
                borderRadius: "5px",
                border: "none",
              }}
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterDashboard;
