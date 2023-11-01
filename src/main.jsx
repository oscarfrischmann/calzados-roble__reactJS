import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBKSM4b6bdFcTbnqhz6_DD-PITpGM7zRHQ',
	authDomain: 'roble-react.firebaseapp.com',
	projectId: 'roble-react',
	storageBucket: 'roble-react.appspot.com',
	messagingSenderId: '804611263230',
	appId: '1:804611263230:web:aeae1caa9272cc6a70b3af',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);
