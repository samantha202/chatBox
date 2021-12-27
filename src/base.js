import Rebase from "re-base";
import firebase from 'firebase/app';
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuXGdChR1VkIlwBHsYkWMk388Np5a6RHc",
    authDomain: "chatbox-app-7abdf.firebaseapp.com",
    databaseURL: "https://chatbox-app-7abdf-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base