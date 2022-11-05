import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }




const firebaseConfig = {
  apiKey: "AIzaSyDCGUQiSLMhS5QV4GFylcOIg--mNLA6GBo",
  authDomain: "auth-example-866bd.firebaseapp.com",
  projectId: "auth-example-866bd",
  storageBucket: "auth-example-866bd.appspot.com",
  messagingSenderId: "1065289578146",
  appId: "1:1065289578146:web:0d2a7542d199201b5509fb"
};
const app = initializeApp(firebaseConfig);
