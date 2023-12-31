// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA81ZcywLeMyomBSUyhwHbaza1e_Z4-Ggo",
  authDomain: "busy-buy--ii.firebaseapp.com",
  projectId: "busy-buy--ii",
  storageBucket: "busy-buy--ii.appspot.com",
  messagingSenderId: "591232376465",
  appId: "1:591232376465:web:4d908d79a1d35418f92930",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);