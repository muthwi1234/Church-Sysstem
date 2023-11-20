// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ClassOne from './assets/ClassOne';
import ClassTwo from './assets/ClassTwo';
import ClassThree from './assets/ClassThree';
import ClassFour from './assets/ClassFour';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/class1">Class 1</Link>
          </li>
          <li>
            <Link to="/class2">Class 2</Link>
          </li>
          <li>
            <Link to="/class3">Class 3</Link>
          </li>
          <li>
            <Link to="/class4">Class 4</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/class1" element={<ClassOne />} />
        <Route path="/class2" element={<ClassTwo />} />
        <Route path="/class3" element={<ClassThree />} />
        <Route path="/class4" element={<ClassFour />} />
      </Routes>
    </Router>
  );
}

export default App;
