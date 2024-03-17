
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyB1FK0LzA0FmGVjjbVpYT7tPhXN_pNxRv4",
  authDomain: "educamaes-teste.firebaseapp.com",
  projectId: "educamaes-teste",
  storageBucket: "educamaes-teste.appspot.com",
  messagingSenderId: "453386810883",
  appId: "1:453386810883:web:b4d8a09b67bd0a79dd8036",
  measurementId: "G-PLF1LD4BLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export {db, auth};