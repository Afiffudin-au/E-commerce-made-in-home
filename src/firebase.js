import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  //firebase key
})
const auth = firebase.auth();
export {auth}