import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth'; // For authentication
import firestore from '@react-native-firebase/firestore'; // For Firestore

const firebaseConfig = {
  apiKey: 'AIzaSyA2-w2xu6NmpHghf_bO1KXcRZ1I0RVwkpY',
  authDomain: 'destined-d721a.firebaseapp.com',
  projectId: 'destined-d721a',
  storageBucket: 'destined-d721a.appspot.com',
  messagingSenderId: '112771689707',
  appId: '1:112771689707:android:c5c7464b1b4e6b37fd22ae',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig); // Remove the extra wrapping object
}

export {firebase, auth, firestore};
