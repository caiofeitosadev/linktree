import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBES8cRG9ElhzECgXiFRiPmvT7mYrzZZ_g',
  authDomain: 'cursoapp-b0f7f.firebaseapp.com',
  projectId: 'cursoapp-b0f7f',
  storageBucket: 'cursoapp-b0f7f.firebasestorage.app',
  messagingSenderId: '582879995682',
  appId: '1:582879995682:web:daeb2ccb1de7268f38e77b',
  measurementId: 'G-SV38XNKQ3H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
