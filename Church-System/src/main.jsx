// Main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
