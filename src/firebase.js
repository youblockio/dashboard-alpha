// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxjvglT20AVn0QCfmHrpYZ5AYJkYgn1_4",
  authDomain: "dashboard-alpha.firebaseapp.com",
  projectId: "dashboard-alpha",
  storageBucket: "dashboard-alpha.appspot.com",
  messagingSenderId: "227841811755",
  appId: "1:227841811755:web:9e8b93dd1d30b9caf4516e",
  measurementId: "G-L1176LPQ4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
