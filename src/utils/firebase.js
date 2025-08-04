// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAXFk3I2G6UHUlC8h8wzobaYKywEVnL5xs",
	authDomain: "netflixgpt-98227.firebaseapp.com",
	projectId: "netflixgpt-98227",
	storageBucket: "netflixgpt-98227.firebasestorage.app",
	messagingSenderId: "334272753929",
	appId: "1:334272753929:web:29d19ad25c5b3f733f23d8",
	measurementId: "G-LFN519T8RP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();