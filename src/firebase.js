// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAotTyy8KGGmMdpsF_AaThpRbqjbgQjYtc",
  authDomain: "bookstore-61d58.firebaseapp.com",
  projectId: "bookstore-61d58",
  storageBucket: "bookstore-61d58.appspot.com",
  messagingSenderId: "709814661186",
  appId: "1:709814661186:web:373912b5c28b59449b7ddb",
  measurementId: "G-G1ZYWC550Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;
