import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhk3B3LPjLMy2Cl9q3vjiUryiN5KTJVa8",
    authDomain: "to-do-done-2a09d.firebaseapp.com",
    databaseURL: "https://to-do-done-2a09d.firebaseio.com",
    projectId: "to-do-done-2a09d",
    storageBucket: "to-do-done-2a09d.appspot.com",
    messagingSenderId: "1006061032027",
    appId: "1:1006061032027:web:3f94f77b55f7848c65a57e"
  };

  const Firebase = firebase.initializeApp(firebaseConfig);
  export default Firebase;