import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9diiErCQnhPYQgT1COrv6gR3VKLPeZmw",
  authDomain: "zeus-empire-aaf53.firebaseapp.com",
  projectId: "zeus-empire-aaf53",
  storageBucket: "zeus-empire-aaf53.firebasestorage.app",
  messagingSenderId: "358132819586",
  appId: "1:358132819586:web:c9f5a9cb2927426cb9369b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);