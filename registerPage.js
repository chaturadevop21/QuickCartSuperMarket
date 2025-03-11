// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4eNXWqwQaqVXOW85wJKjjW_4XsJNpxHA",
  authDomain: "quickcartsupermarket-214d2.firebaseapp.com",
  projectId: "quickcartsupermarket-214d2",
  storageBucket: "quickcartsupermarket-214d2.firebasestorage.app",
  messagingSenderId: "964230662014",
  appId: "1:964230662014:web:a2bdd23f971dae64f6152f",
  measurementId: "G-ZEY59MCVXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
