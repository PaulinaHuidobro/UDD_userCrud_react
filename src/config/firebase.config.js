
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "user-app-emergency.firebaseapp.com",
  projectId: "user-app-emergency",
  storageBucket: "user-app-emergency.appspot.com",
  messagingSenderId: "356989454312",
  appId: "1:356989454312:web:2af6bf99deab723c9ec65d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
