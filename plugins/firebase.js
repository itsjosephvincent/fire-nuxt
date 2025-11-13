import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyBjr-dRZSQ8NhTa4KJQZ1JGiMVKw9OyEVc",
        authDomain: "influx-payroll-system.firebaseapp.com",
        projectId: "influx-payroll-system",
        storageBucket: "influx-payroll-system.firebasestorage.app",
        messagingSenderId: "626133186415",
        appId: "1:626133186415:web:0e871b0520d6a9fdbc9a9a"
    };

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.provide('auth', auth)
    nuxtApp.provide('firestore', firestore)
})