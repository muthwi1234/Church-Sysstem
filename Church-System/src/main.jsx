// Main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace with your Firebase project config
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(firebaseApp);

function Main() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
