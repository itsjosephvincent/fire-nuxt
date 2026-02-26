import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyBCEWTCqxHKkFkf8v8HCvBhB9Demp5lm7s",
        authDomain: "influx-payroll.firebaseapp.com",
        projectId: "influx-payroll",
        storageBucket: "influx-payroll.firebasestorage.app",
        messagingSenderId: "423328596785",
        appId: "1:423328596785:web:51b67456464951f30be610"
    };

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.provide('auth', auth)
    nuxtApp.provide('firestore', firestore)
})