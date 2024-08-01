// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB19kuSGIPUqZ_xssbdKDNOw1MSBl450j0",
  authDomain: "whatsdown-b7f24.firebaseapp.com",
  projectId: "whatsdown-b7f24",
  storageBucket: "whatsdown-b7f24.appspot.com",
  messagingSenderId: "123076054882",
  appId: "1:123076054882:web:da54241840543fc150663b",
  measurementId: "G-MPJDJCY44Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
