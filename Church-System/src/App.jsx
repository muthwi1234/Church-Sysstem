import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUp from './assets/SignUp';
import Login from './assets/Login';
import ClassOne from './assets/ClassOne';
import ClassTwo from './assets/ClassTwo';
import ClassThree from './assets/ClassThree';
import ClassFour from './assets/ClassFour';
import Teachers from './assets/Teachers';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          
          <li>
            <Link to="/class1">ClassOne</Link>
          </li>
          <li>
            <Link to="/class2">ClassTwo</Link>
          </li>
          <li>
            <Link to="/class3">ClassThree</Link>
          </li>
          <li>
            <Link to="/class4">ClassFour</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* Authentication Routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Main Routes */}
        <Route path="/class1" element={<ClassOne />} />
        <Route path="/class2" element={<ClassTwo />} />
        <Route path="/class3" element={<ClassThree />} />
        <Route path="/class4" element={<ClassFour />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Router>
  );
}

export default App;
