import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMa92Vkd8kYwmYUbGcb72U-tKhDQicUFU",
  authDomain: "mirats-book.firebaseapp.com",
  databaseURL: "https://mirats-book-default-rtdb.firebaseio.com",
  projectId: "mirats-book",
  storageBucket: "mirats-book.appspot.com",
  messagingSenderId: "89804140987",
  appId: "1:89804140987:web:9a87b05f28e95ae49e549e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
