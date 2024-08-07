// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3d269.firebaseapp.com",
  projectId: "mern-auth-3d269",
  storageBucket: "mern-auth-3d269.appspot.com",
  messagingSenderId: "418332575139",
  appId: "1:418332575139:web:7337f1ac6528c9d322c616",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
