// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIlY6VL995pixrwhiwvhIXiw0kkc7j1dc",
    authDomain: "bike-directory-f4269.firebaseapp.com",
    projectId: "bike-directory-f4269",
    storageBucket: "bike-directory-f4269.appspot.com",
    messagingSenderId: "1032862706110",
    appId: "1:1032862706110:web:09aac973f91f278958b1ef",
    measurementId: "G-WTJDT960JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;