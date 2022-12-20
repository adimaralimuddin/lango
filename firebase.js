// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbNOrz1_PEuiBRVTixcrpCfJXESXx4xsY",
  authDomain: "lango-fcfa9.firebaseapp.com",
  projectId: "lango-fcfa9",
  storageBucket: "lango-fcfa9.appspot.com",
  messagingSenderId: "535847326111",
  appId: "1:535847326111:web:e7c3ccdafeedb5303dadaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
