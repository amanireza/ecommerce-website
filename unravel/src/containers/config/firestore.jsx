// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD1mKhSeLBRY2FzqoOHR78qNhkksqdcXPQ",
	authDomain: "unravel-cf03b.firebaseapp.com",
	projectId: "unravel-cf03b",
	storageBucket: "unravel-cf03b.appspot.com",
	messagingSenderId: "846952180533",
	appId: "1:846952180533:web:1d16458f0701fe5f08fa7c",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
