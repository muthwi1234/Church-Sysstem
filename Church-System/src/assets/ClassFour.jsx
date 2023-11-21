// ClassFour.jsx
import React, { useState, useEffect } from 'react';

function ClassFour() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Retrieve stored data on component mount
    const storedStudents = JSON.parse(localStorage.getItem('classFourStudents')) || [];
    setStudents(storedStudents);
  }, []);

  const handleAddStudent = () => {
    if (newStudent.trim() !== '') {
      if (editIndex === null) {
        // Add new student
        const updatedStudents = [...students, newStudent];
        setStudents(updatedStudents);
        setNewStudent('');

        // Store data in localStorage
        localStorage.setItem('classFourStudents', JSON.stringify(updatedStudents));
      } else {
        // Update existing student
        const updatedStudents = [...students];
        updatedStudents[editIndex] = newStudent;
        setStudents(updatedStudents);
        setNewStudent('');
        setEditIndex(null);

        // Store data in localStorage
        localStorage.setItem('classFourStudents', JSON.stringify(updatedStudents));
      }
    }
  };

  const handleEditStudent = (index) => {
    setNewStudent(students[index]);
    setEditIndex(index);
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);

    // Store data in localStorage
    localStorage.setItem('classFourStudents', JSON.stringify(updatedStudents));
  };

  return (
    <div>
      <h2>Class Four</h2>

      {/* Student List */}
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => handleEditStudent(index)}>Edit</button>
            <button onClick={() => handleDeleteStudent(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add/Edit Student Form */}
      <div>
        <label>
          {editIndex !== null ? 'Edit Student' : 'Add Student'}:
          <input
            type="text"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
          />
        </label>
        <button onClick={handleAddStudent}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
  );
}

export default ClassFour;
