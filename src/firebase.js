// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFqsbGJ7tK-10v-fFEgf9q6RPbU9ocpoI",
  authDomain: "cursor-test-3d310.firebaseapp.com",
  projectId: "cursor-test-3d310",
  storageBucket: "cursor-test-3d310.firebasestorage.app",
  messagingSenderId: "617213524494",
  appId: "1:617213524494:web:f475ad0fae9b898cb2da5f",
  measurementId: "G-3780J1FR84"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
