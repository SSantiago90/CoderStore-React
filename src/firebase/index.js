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

export function getOrder(id){
    const db = getFirestore();
    let order;
    const orderRef = db.collection("orders").doc(id);

    orderRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          order = ({ id, ...doc.data() });
          console.log('founf');
        } else{
        order = null;
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

      return order;
}