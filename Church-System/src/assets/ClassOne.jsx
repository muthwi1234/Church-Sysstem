// ClassOne.jsx
import React, { useState, useEffect } from 'react';

function ClassOne() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');

  useEffect(() => {
    // Retrieve stored data on component mount
    const storedStudents = JSON.parse(localStorage.getItem('classOneStudents')) || [];
    setStudents(storedStudents);
  }, []);

  const handleAddStudent = () => {
    if (newStudent.trim() !== '') {
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      setNewStudent('');

      // Store data in localStorage
      localStorage.setItem('classOneStudents', JSON.stringify(updatedStudents));
    }
  };

  return (
    <div>
      <h2>Class One</h2>

      {/* Student List */}
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      {/* Add Student Form */}
      <div>
        <label>
          Add Student:
          <input
            type="text"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
          />
        </label>
        <button onClick={handleAddStudent}>Add</button>
      </div>
    </div>
  );
}

export default ClassOne;
