import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbDxwaMI7opCkH6i-cTj6Uh-N4ZNeHRQU",
  authDomain: "coderhouse-7271d.firebaseapp.com",
  projectId: "coderhouse-7271d",
  storageBucket: "coderhouse-7271d.appspot.com",
  messagingSenderId: "345220449654",
  appId: "1:345220449654:web:2113a2d8c519964a25e657"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);