import firebase from "firebase/app";
require('firebase/database');

const config = {
    apiKey: "AIzaSyA45L0bz3RXk1B9ALj-wmtl6nuQmdobTlU",
    authDomain: "viviumdb.firebaseapp.com",
    databaseURL: "https://viviumdb.firebaseio.com",
    projectId: "viviumdb",
    storageBucket: "viviumdb.appspot.com",
    messagingSenderId: "246112251239",
    appId: "1:246112251239:web:943b250eeb6328d93893c2",
    measurementId: "G-6TSG4PYWPH"
};
// Initialize Firebase
firebase.initializeApp(config);
export const database = firebase.database();

