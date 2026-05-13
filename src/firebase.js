import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi0GeII4LWfHrBgHT1pCrkWB_US0Euf3I",
  authDomain: "fence-x-website.firebaseapp.com",
  projectId: "fence-x-website",
  storageBucket: "fence-x-website.firebasestorage.app",
  messagingSenderId: "497116719454",
  appId: "1:497116719454:web:27d55fcb42368b34f907cf"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
