// Teachers.jsx
import React, { useState, useEffect } from 'react';

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Retrieve stored data on component mount
    const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
    setTeachers(storedTeachers);
  }, []);

  const handleAddTeacher = () => {
    if (newTeacher.trim() !== '') {
      if (editIndex === null) {
        // Add new teacher
        const updatedTeachers = [...teachers, newTeacher];
        setTeachers(updatedTeachers);
        setNewTeacher('');

        // Store data in localStorage
        localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
      } else {
        // Update existing teacher
        const updatedTeachers = [...teachers];
        updatedTeachers[editIndex] = newTeacher;
        setTeachers(updatedTeachers);
        setNewTeacher('');
        setEditIndex(null);

        // Store data in localStorage
        localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
      }
    }
  };

  const handleEditTeacher = (index) => {
    setNewTeacher(teachers[index]);
    setEditIndex(index);
  };

  const handleDeleteTeacher = (index) => {
    const updatedTeachers = [...teachers];
    updatedTeachers.splice(index, 1);
    setTeachers(updatedTeachers);

    // Store data in localStorage
    localStorage.setItem('teachers', JSON.stringify(updatedTeachers));
  };

  return (
    <div className="teachers-container">
      <h2>Teachers</h2>

      {/* Teacher List */}
      <ul className="teacher-list">
        {teachers.map((teacher, index) => (
          <li key={index} className="teacher-item">
            {teacher}
            <button className="edit-button" onClick={() => handleEditTeacher(index)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => handleDeleteTeacher(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Add/Edit Teacher Form */}
      <div className="form-container">
        <label>
          {editIndex !== null ? 'Edit Teacher' : 'Add Teacher'}:
          <input
            type="text"
            value={newTeacher}
            onChange={(e) => setNewTeacher(e.target.value)}
          />
        </label>
        <button className="action-button" onClick={handleAddTeacher}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
}

export default Teachers;
