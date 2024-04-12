import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCYVJd7kF_dlxk6PTYsMAYNKuWxlRpElmI",
  authDomain:"netflix-clone-d4ef9.firebaseapp.com",
  projectId: "netflix-clone-d4ef9",
  storageBucket: "netflix-clone-d4ef9.appspot.com",
  messagingSenderId: "670342404730",
  appId:"1:670342404730:web:165e537a894c308f1179c3",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;