var firebaseConfig = {
    apiKey: "AIzaSyBIag_ndexrbybOfR6_nYX-Q2Msti_MrFo",
    authDomain: "sih-nex.firebaseapp.com",
    databaseURL: "https://sih-nex-default-rtdb.firebaseio.com/",
    projectId: "sih-nex",
    storageBucket: "sih-nex.appspot.com",
    messagingSenderId: "16645153885",
    appId: "1:16645153885:web:3e3b9b0f90794c288019b4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();