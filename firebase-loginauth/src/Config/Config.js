import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQ-DwJcJE3V6tpiNNgaimECXrhYbAC3G0",
  authDomain: "login-auth-d2b30.firebaseapp.com",
  projectId: "login-auth-d2b30",
  storageBucket: "login-auth-d2b30.appspot.com",
  messagingSenderId: "587025609189",
  appId: "1:587025609189:web:c6f9b81db5ab37b9f63f0c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth( app );
const db = getFirestore(app);

export {auth, db};