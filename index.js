import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfrGCEdQv_pfXzXxg81ZWLashrewPXcUI",
    authDomain: "fir-project-1-c2733.firebaseapp.com",
    databaseURL: "https://fir-project-1-c2733-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-project-1-c2733",
    storageBucket: "fir-project-1-c2733.appspot.com",
    messagingSenderId: "319225300814",
    appId: "1:319225300814:web:573c0e1cb3b59bb652801f"

}
firebase.initializeApp(firebase.Config);

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
