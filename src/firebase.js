import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4rTHSLEpLNQ_lpXs926g4N8RDc2fldmo",
  authDomain: "dailypanda-8a8f9.firebaseapp.com",
  databaseURL:
    "https://dailypanda-8a8f9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dailypanda-8a8f9",
  storageBucket: "dailypanda-8a8f9.appspot.com",
  messagingSenderId: "1077421100201",
  appId: "1:1077421100201:web:a411e16a9d25d05288adb8",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const authGet = getAuth;
export const authService = createUserWithEmailAndPassword;
export const logInService = signInWithEmailAndPassword;
