// import from firebase core library
import firebase from 'firebase/compat/app'
// importing firestore
import 'firebase/compat/firestore'
// object copied from app settings 
const firebaseConfig = {
    apiKey: "AIzaSyBsgrf1aGhG_wLFoTfjWhNvVSRsm00RXIQ",
    authDomain: "vue-firebase-sites-55a5d.firebaseapp.com",
    projectId: "vue-firebase-sites-55a5d",
    storageBucket: "vue-firebase-sites-55a5d.appspot.com",
    messagingSenderId: "1033501920722",
    appId: "1:1033501920722:web:37eff633bb97eac6c60c0b"
  };
// init firebase
  firebase.initializeApp(firebaseConfig)

//   creating instance of firestore
  const projectFirestore = firebase.firestore()
// creating instance of timestamp function 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

// exporting
export { projectFirestore, timestamp }
