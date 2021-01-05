import Rebase from 're-base'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAI08v2qvBCg70gVEhDrcBN7P00DjoL5io",
    authDomain: "react-for-beginners-ca474.firebaseapp.com",
    databaseURL: "https://react-for-beginners-ca474-default-rtdb.europe-west1.firebasedatabase.app/"
/*     projectId: "react-for-beginners-ca474",
    storageBucket: "react-for-beginners-ca474.appspot.com",
    messagingSenderId: "222639092750",
    appId: "1:222639092750:web:6fa50c2a4b49d560a0385f" */
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base