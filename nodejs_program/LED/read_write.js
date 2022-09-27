// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDcHyq0qRYUDHeNg7VhsLo65TmrmzLnOMA",
    authDomain: "jpyuhomeautomation-87722.firebaseapp.com",
    databaseURL: "https://jpyuhomeautomation-87722-default-rtdb.firebaseio.com",
    projectId: "jpyuhomeautomation-87722",
    storageBucket: "jpyuhomeautomation-87722.appspot.com",
    messagingSenderId: "712212616433",
    // appId: "1:712212616433:web:c3d4e459eca3bb36c4c550",
    // measurementId: "G-G1WGNMS2F9"
};

// Initialize Firebase
firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);
var db = firebase.datebase();
ref = db.ref("/");
var vulue = {
    Test1: "t1",
    Test2: "t2"
}
ref.set(vulue);
ref.once("value", function (snapshot) {
    console.log(snapshot.val());
})
