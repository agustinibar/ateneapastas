// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwdzv4DddKlK_txmqiQunZNnQuSN9CWio",
  authDomain: "ateneapastas-32026.firebaseapp.com",
  projectId: "ateneapastas-32026",
  storageBucket: "ateneapastas-32026.appspot.com",
  messagingSenderId: "786328287599",
  appId: "1:786328287599:web:05dfca8b3a91887156909a",
  measurementId: "G-70LELG633Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);