// Import the functions you need from the SDKs you need
import { initializeApp } from '@react-native-firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCfbPg1ObfcvPMaWBiNG09usDq9MbfSJwU',
  authDomain: 'planix-da71e.firebaseapp.com',
  projectId: 'planix-da71e',
  storageBucket: 'planix-da71e.appspot.com',
  messagingSenderId: '1066608047781',
  appId: '1:1066608047781:web:d1435ca3aeec630c83bf4c',
  measurementId: 'G-LW187DHZG0',
};

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.planix.planix',
  },
  android: {
    packageName: 'com.planix.planix',
    installApp: true,
    minimumVersion: '12',
  },
  dynamicLinkDomain: 'yourapp.page.link',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app, actionCodeSettings };
