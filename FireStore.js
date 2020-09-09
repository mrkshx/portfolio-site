import firebase from 'firebase';

const config = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_FIREBASE_PROJECT_DOMAIN,
   databaseURL: process.env.REACT_APP_FIREBASE_PROJECT_DB_URL,
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: "",
   messagingSenderId: ""
};

firebase.initializeApp(config);

export default firebase;
