// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aditya-estate-caee4.firebaseapp.com",
  projectId: "aditya-estate-caee4",
  storageBucket: "aditya-estate-caee4.firebasestorage.app",
  messagingSenderId: "927978469964",
  appId: "1:927978469964:web:67dd51540ef224d64f92e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);