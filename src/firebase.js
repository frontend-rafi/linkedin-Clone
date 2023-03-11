import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDR7TKB_GaIgbrK7JUkIJiS3HeE7S96xM8",
  authDomain: "linkedin-clone-2740a.firebaseapp.com",
  projectId: "linkedin-clone-2740a",
  storageBucket: "linkedin-clone-2740a.appspot.com",
  messagingSenderId: "414651889593",
  appId: "1:414651889593:web:435f8b76b3e42140cb6868",
  measurementId: "G-3WP0TV36DF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth =firebase.auth()

export  { db, auth } 
