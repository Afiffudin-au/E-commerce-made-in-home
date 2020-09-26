import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvVUdIeEf1-Fm9hFp42KYvuWdIdlE8mlQ",
  authDomain: "e-commerce-made-in-home.firebaseapp.com",
  databaseURL: "https://e-commerce-made-in-home.firebaseio.com",
  projectId: "e-commerce-made-in-home",
  storageBucket: "e-commerce-made-in-home.appspot.com",
  messagingSenderId: "261839175346",
  appId: "1:261839175346:web:bf8e2c6ecb1522f4f193ab"
})
const auth = firebase.auth();
const db = firebaseApp.firestore();
export {auth,db}