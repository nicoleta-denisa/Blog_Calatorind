import * as firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD3w_Rs6BsVPgvOt3UKFRFs981sbegLClQ",
    authDomain: "calatorind-9da7f.firebaseapp.com",
    databaseURL: "https://calatorind-9da7f.firebaseio.com",
    projectId: "calatorind-9da7f",
    storageBucket: "calatorind-9da7f.appspot.com",
    messagingSenderId: "19264662856",
    appId: "1:19264662856:web:7a952270d5dfbfdbe9d77d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;