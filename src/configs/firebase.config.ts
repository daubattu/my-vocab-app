 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlwK3vTVTUk-aGpfrfUSiDBRIHrDumvwg",
  authDomain: "my-vocab-app-d344b.firebaseapp.com",
  projectId: "my-vocab-app-d344b",
  storageBucket: "my-vocab-app-d344b.appspot.com",
  messagingSenderId: "716400569536",
  appId: "1:716400569536:web:97d0a5062a6c0411f85125",
  measurementId: "G-TSN9ZHD785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;