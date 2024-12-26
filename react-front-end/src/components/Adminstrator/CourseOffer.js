import React, { useState } from "react";

const CourseOffer = () => {
  // Departments and sample courses
  const departments = [
    { name: "Computer Science", id: 1 },
    { name: "Software Engineering", id: 2 },
    { name: "IT", id: 3 },
  ];

  const courses = {
    1: [
      "Introduction to Programming",
      "Data Structures and Algorithms",
      "Operating Systems",
      "Database Management Systems",
    ],
    2: [
      "Software Engineering Principles",
      "Software Testing and Quality Assurance",
      "Object-Oriented Programming",
      "Agile Methodology",
    ],
    3: [
      "Computer Networks",
      "Web Development",
      "Cloud Computing",
      "Cybersecurity",
    ],
  };

  // State for selected department and offered courses
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Handle department selection
  const handleDepartmentChange = (event) => {
    const departmentId = parseInt(event.target.value);
    setSelectedDepartment(departmentId);
    setSelectedCourses([]); // Reset courses when department changes
  };

  // Handle course selection
  const handleCourseChange = (event) => {
    const course = event.target.value;
    setSelectedCourses((prevCourses) =>
      prevCourses.includes(course)
        ? prevCourses.filter((item) => item !== course) // Deselect if already selected
        : [...prevCourses, course] // Select course
    );
  };

  // Submit the offered courses
  const handleSubmit = () => {
    // Simulate offering courses (Here, you can integrate with the backend API)
    console.log(`Offered Courses for ${departments.find(department => department.id === selectedDepartment).name}:`, selectedCourses);
    alert("Courses have been offered successfully!");
  };

  return (
    <div className="container">
      <h2>Offer Courses</h2>
      
      {/* Department Selection */}
      <div className="mb-3">
        <label htmlFor="department" className="form-label">
          Select Department
        </label>
        <select
          className="form-select"
          id="department"
          onChange={handleDepartmentChange}
        >
          <option value="">Select a Department</option>
          {departments.map((department) => (
            <option key={department.id} value={department.id}>
              {department.name}
            </option>
          ))}
        </select>
      </div>

      {/* Courses List based on selected department */}
      {selectedDepartment && (
        <div className="mb-3">
          <h4>Courses for {departments.find((dept) => dept.id === selectedDepartment).name}</h4>
          <div>
            {courses[selectedDepartment].map((course, index) => (
              <div key={index} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={course}
                  id={`course-${index}`}
                  onChange={handleCourseChange}
                />
                <label className="form-check-label" htmlFor={`course-${index}`}>
                  {course}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Offer Selected Courses
      </button>
    </div>
  );
};

export default CourseOffer;
