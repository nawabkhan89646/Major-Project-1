// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import {db} from 'firebase/database'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBVNVfGIwv50GWdSfhLuwX9XKDlu5f0b8",
  authDomain: "g-drive-8da02.firebaseapp.com",
  projectId: "g-drive-8da02",
  storageBucket: "g-drive-8da02.appspot.com",
  messagingSenderId: "792641096868",
  appId: "1:792641096868:web:edf492819c3847af076a31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
export {app, auth , db , storage , googleProvider};