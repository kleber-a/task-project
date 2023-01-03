import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAS8Ys1ugIGrf9fjBBDiPZmNcy4ojVhwQQ",
    authDomain: "curso-be78f.firebaseapp.com",
    projectId: "curso-be78f",
    storageBucket: "curso-be78f.appspot.com",
    messagingSenderId: "73654052717",
    appId: "1:73654052717:web:5431e362a644237f5e1c64",
    measurementId: "G-QS6KDBTVFT"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };