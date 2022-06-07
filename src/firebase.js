// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBujYPWhlpZVMiLsEE5MjvwZUAgeBdHmmE",
  authDomain: "twitter-bbf50.firebaseapp.com",
  projectId: "twitter-bbf50",
  storageBucket: "twitter-bbf50.appspot.com",
  messagingSenderId: "796684459919",
  appId: "1:796684459919:web:b06516936a7a3d3828f5fa",
  measurementId: "G-PR15L7RPF5"
};


let app =initializeApp(firebaseConfig);
// Initialize Firebase
let db = getFirestore(app)

export default db;