import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCmx-JKkAN_4dw6f-bbgeEc4Of3-KbhNbI",
    authDomain: "catch-of-the-day-micael.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-micael.firebaseio.com"
      
});

const base = Rebase.createClass(firebaseApp.database());

// THIS IS A NAMED EXPORT
export { firebaseApp };

//THIS A DEFAULT EXPORT
export default base;