import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDjOyEsVY4WjLGjgix-vk79QSmAe06_sCE",
    authDomain: "tugasmodul-10.firebaseapp.com",
    projectId: "tugasmodul-10",
    storageBucket: "tugasmodul-10.appspot.com",
    messagingSenderId: "759231168505",
    appId: "1:759231168505:web:d8f2b79c1b735d435d8728",
    measurementId: "G-JMK9XRF81F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)