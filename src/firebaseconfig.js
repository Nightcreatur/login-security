import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjVPzT6SVzWOX9oxAvCR4nTXW25jeX588",
  authDomain: "loginsecurity-ec852.firebaseapp.com",
  projectId: "loginsecurity-ec852",
  storageBucket: "loginsecurity-ec852.appspot.com",
  messagingSenderId: "34572979724",
  appId: "1:34572979724:web:36e8fe6bfde19e8b09e829",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
