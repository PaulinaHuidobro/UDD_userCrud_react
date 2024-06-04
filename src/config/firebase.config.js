
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY


const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "restaurant-34a0c.firebaseapp.com",
  projectId: "restaurant-34a0c",
  storageBucket: "restaurant-34a0c.appspot.com",
  messagingSenderId: "795013837058",
  appId: "1:795013837058:web:ccf71418304975c98b921b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

