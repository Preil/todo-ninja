import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBPz49UALnFBuwClO7MFknJ7pVDt5jRlkA",
    authDomain: "todo-ninja-5c8ac.firebaseapp.com",
    databaseURL: "https://todo-ninja-5c8ac.firebaseio.com",
    projectId: "todo-ninja-5c8ac",
    storageBucket: "todo-ninja-5c8ac.appspot.com",
    messagingSenderId: "1079653090174",
    appId: "1:1079653090174:web:be5443682251cd01"
}
firebase.initializeApp(config)
const db = firebase.firestore()

export default db