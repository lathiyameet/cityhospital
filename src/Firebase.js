// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHjJ8etwEb3q3LHwgsnE5AjH0qBOGqvro",
  authDomain: "cityhospital-5c487.firebaseapp.com",
  projectId: "cityhospital-5c487",
  storageBucket: "cityhospital-5c487.appspot.com",
  messagingSenderId: "445393090174",
  appId: "1:445393090174:web:a6216bb76c761d0de24a2f",
  measurementId: "G-Z7L7X264TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);