// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkW3hRhhegF5y_igN6I6SgL7nZ2HA2IO4",
  authDomain: "bike-service-d34c7.firebaseapp.com",
  projectId: "bike-service-d34c7",
  storageBucket: "bike-service-d34c7.appspot.com",
  messagingSenderId: "4879943567",
  appId: "1:4879943567:web:3198e7f0ad296a42e06dfa",
  measurementId: "G-DMHKX33J0Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
