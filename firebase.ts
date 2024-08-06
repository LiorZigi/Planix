import { initializeApp, getApps } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCfbPg1ObfcvPMaWBiNG09usDq9MbfSJwU',
  authDomain: 'planix-da71e.firebaseapp.com',
  projectId: 'planix-da71e',
  storageBucket: 'planix-da71e.appspot.com',
  messagingSenderId: '1066608047781',
  appId: '1:1066608047781:web:d1435ca3aeec630c83bf4c',
  measurementId: 'G-LW187DHZG0',
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { db, auth, app };
