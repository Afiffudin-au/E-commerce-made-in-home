import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
 //your API key
})
const auth = firebase.auth();
const db = firebaseApp.firestore();
export {auth,db}