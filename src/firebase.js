// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANzmU6hr7hmlLDJb_Qzs4Ht6P4bhELEWo",
  authDomain: "chat-a7006.firebaseapp.com",
  projectId: "chat-a7006",
  storageBucket: "chat-a7006.appspot.com",
  messagingSenderId: "161457827461",
  appId: "1:161457827461:web:3be51b9857593cecb743ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()