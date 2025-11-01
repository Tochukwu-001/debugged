// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "debugged-1007b.firebaseapp.com",
  projectId: "debugged-1007b",
  storageBucket: "debugged-1007b.firebasestorage.app",
  messagingSenderId: "673878444713",
  appId: "1:673878444713:web:d9dbc650b42983ab07b7b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);