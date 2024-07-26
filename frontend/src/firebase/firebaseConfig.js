import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyC7s6jsXyqGHdIteG1379Vywo1ri3yzhn4",
    authDomain: "stripe-test-d3a7b.firebaseapp.com",
    projectId: "stripe-test-d3a7b",
    storageBucket: "stripe-test-d3a7b.appspot.com",
    messagingSenderId: "224991257979",
    appId: "1:224991257979:web:1fbcbf03b4cb00abf089de",
    measurementId: "G-3QTTQM1FM7",
    databaseURL: "https://stripe-test-d3a7b-default-rtdb.firebaseio.com/"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase