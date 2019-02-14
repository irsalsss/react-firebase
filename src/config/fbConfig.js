import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWZ1o1BWwdzt_1B6T6YcDsOeqNbeUQnqQ",
  authDomain: "react-firebase-irsalplan.firebaseapp.com",
  databaseURL: "https://react-firebase-irsalplan.firebaseio.com",
  projectId: "react-firebase-irsalplan",
  storageBucket: "react-firebase-irsalplan.appspot.com",
  messagingSenderId: "460950409124"
};

firebase.initializeApp(config);
firebase.firestore();
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;