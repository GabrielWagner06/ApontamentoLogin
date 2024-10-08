import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAewNoeQZRa6vITaMhGBkDzBFKQIx5wZVk",
  authDomain: "apontamento-50d86.firebaseapp.com",
  projectId: "apontamento-50d86",
  storageBucket: "apontamento-50d86.appspot.com",
  messagingSenderId: "1084314696456",
  appId: "1:1084314696456:web:67ff967c4f48820836cabd",
  measurementId: "G-82735DJ3GL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // para disponibilizar a autenticação
export const db = getFirestore(app); // para disponibilizar o banco de dados
