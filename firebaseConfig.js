import { initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
const dotenv = require('dotenv');
dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyBiQ3md8aAmjaTBxZlFUiqwF0t2J1k0zuM",
    authDomain: "anonymousqa-a6743.firebaseapp.com",
    projectId: "anonymousqa-a6743",
    storageBucket: "anonymousqa-a6743.appspot.com",
    messagingSenderId: "560048413431",
    appId: "1:560048413431:web:532af1e6b21f9fd4a2d1f2"
  };
  
// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJ_ID,
//   storageBucket:process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESS_SENDER_ID,
//   appId: process.env.APP_ID
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;