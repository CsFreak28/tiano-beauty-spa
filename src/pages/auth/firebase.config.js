// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiPJGzUH0jA6X8oc6qNRQffw4baFRkQNI",
  authDomain: "tiano-beauty-spa.firebaseapp.com",
  projectId: "tiano-beauty-spa",
  storageBucket: "tiano-beauty-spa.appspot.com",
  messagingSenderId: "411082437944",
  appId: "1:411082437944:web:07ac9ba67ea7a155e47dcd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
