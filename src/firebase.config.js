// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvWxxTA1Uoiy63UBQ3vQ5j8Ql4R8G2qhE",
  authDomain: "brand-shop-a10-15274.firebaseapp.com",
  projectId: "brand-shop-a10-15274",
  storageBucket: "brand-shop-a10-15274.appspot.com",
  messagingSenderId: "379886108880",
  appId: "1:379886108880:web:46c72aec49bdbc4fc91ed5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
