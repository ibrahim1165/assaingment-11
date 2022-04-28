// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8UjangTnbWeg0zIyE7t2PvBjsGGvB-2Q",
  authDomain: "laptop-warehouse-f81ef.firebaseapp.com",
  projectId: "laptop-warehouse-f81ef",
  storageBucket: "laptop-warehouse-f81ef.appspot.com",
  messagingSenderId: "873578162541",
  appId: "1:873578162541:web:40496d8ce44c94979e1264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;