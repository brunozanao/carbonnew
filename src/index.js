import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBnMxYjiqLkjgT4s7ZIpVMSs3rI21z8cb0",
  authDomain: "neoh-16431.firebaseapp.com",
  projectId: "neoh-16431",
  storageBucket: "neoh-16431.appspot.com",
  messagingSenderId: "237879653852",
  appId: "1:237879653852:web:c62effcbf50c8285db4b19",
  measurementId: "G-99Q298EL4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
