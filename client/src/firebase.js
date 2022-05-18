// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqvqb73vwW7ozMO0b18dp5bolZYK06Weg",
  authDomain: "blog-app-cd488.firebaseapp.com",
  projectId: "blog-app-cd488",
  storageBucket: "blog-app-cd488.appspot.com",
  messagingSenderId: "127127405594",
  appId: "1:127127405594:web:4fbc25228f3a4d18c57da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export 
export default app;