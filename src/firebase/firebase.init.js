// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOWpS5miKtI4Qz9YNkwgBv3ID_6GXXv5M",
  authDomain: "visa-navigator-36de8.firebaseapp.com",
  projectId: "visa-navigator-36de8",
  storageBucket: "visa-navigator-36de8.firebasestorage.app",
  messagingSenderId: "494242607346",
  appId: "1:494242607346:web:7e99d9c3f5d927ce38e06b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
