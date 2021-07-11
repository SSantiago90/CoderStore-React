import firebase from 'firebase/app'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "coderstorereact.firebaseapp.com",
    projectId: "coderstorereact",
    storageBucket: "coderstorereact.appspot.com",
    messagingSenderId: process.env.FIREBASE_API_KEY,
    appId: process.env.APP_ID
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
