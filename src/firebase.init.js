// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHjkM6GCYkCQyAuyDMedK3Zd8lrb6DdEM",
    authDomain: "health-coach-6cb18.firebaseapp.com",
    projectId: "health-coach-6cb18",
    storageBucket: "health-coach-6cb18.appspot.com",
    messagingSenderId: "645557992963",
    appId: "1:645557992963:web:a203876f9c9108be0cd836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;