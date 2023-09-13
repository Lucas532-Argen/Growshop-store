import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7rKx7mOZMmEWuiu-EwPhejaM5qw8ucGM",
  authDomain: "growshop-store.firebaseapp.com",
  projectId: "growshop-store",
  storageBucket: "growshop-store.appspot.com",
  messagingSenderId: "999687684006",
  appId: "1:999687684006:web:da8dc1b8e5c2ea4f5b1967"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)