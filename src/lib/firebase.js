import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9PwVmnOvcfahdh1HMlqWoMRxKDD-nw50",
  authDomain: "write-your-letter.firebaseapp.com",
  projectId: "write-your-letter",
  storageBucket: "write-your-letter.appspot.com",
  messagingSenderId: "1023456789012",
  appId: "1:1023456789012:web:a1b2c3d4e5f67890abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
