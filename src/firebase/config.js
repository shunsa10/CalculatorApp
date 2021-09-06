// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwXAGnjVdqTnqJnZ9hlhn2rvNV9zSDijo",
  authDomain: "calculator-app-67215.firebaseapp.com",
  projectId: "calculator-app-67215",
  storageBucket: "calculator-app-67215.appspot.com",
  messagingSenderId: "388444424533",
  appId: "1:388444424533:web:c90e3ecaed198eb44147dc",
  measurementId: "G-DK1ZRFSWN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
