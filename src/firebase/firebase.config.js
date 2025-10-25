// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR9IkZRXVCFhHbCgdJjB-ni_T9hKkYLZ4",
  authDomain: "greennest-ef4bc.firebaseapp.com",
  projectId: "greennest-ef4bc",
  storageBucket: "greennest-ef4bc.firebasestorage.app",
  messagingSenderId: "633111956087",
  appId: "1:633111956087:web:0a058409f17c0b2ca35472"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
