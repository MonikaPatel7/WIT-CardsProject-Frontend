// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYKOzTbj9oeovDkkqLBPOAC2ljt03yORQ",
  authDomain: "wit-card.firebaseapp.com",
  projectId: "wit-card",
  storageBucket: "wit-card.appspot.com",
  messagingSenderId: "905887515608",
  appId: "1:905887515608:web:67b658296b93ad931128ad",
  measurementId: "G-PX33DVJWX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut}
