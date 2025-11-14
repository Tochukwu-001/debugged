// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsEBu2Hx3jTwugUpGgTbtdZlV9ghdp3yk",
  authDomain: "debugged-3a39c.firebaseapp.com",
  projectId: "debugged-3a39c",
  storageBucket: "debugged-3a39c.firebasestorage.app",
  messagingSenderId: "582759215033",
  appId: "1:582759215033:web:838c88375bb4e6afb75068",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
