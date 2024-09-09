import { initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoeCR-NimonRQK5A3cMghvDK2pI6bY58Q",
    authDomain: "dev-connections-98713.firebaseapp.com",
    projectId: "dev-connections-98713",
    storageBucket: "dev-connections-98713.appspot.com",
    messagingSenderId: "433384302795",
    appId: "1:433384302795:web:b4fd53edc888491e92934e",
    measurementId: "G-JF9C0QDW2F"
  };

  
// Initialize Firebase
export const fbase  = initializeApp(firebaseConfig);
export const analytics = getAnalytics(fbase);
