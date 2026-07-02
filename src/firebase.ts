import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd-ZxS23m2xAjUqkIpMeEuTuwwUj44Z9g",
  authDomain: "mariage-leonie-liverance.firebaseapp.com",
  projectId: "mariage-leonie-liverance",
  storageBucket: "mariage-leonie-liverance.firebasestorage.app",
  messagingSenderId: "1006229859052",
  appId: "1:1006229859052:web:cbcbb3ddce13d9013ad3c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
