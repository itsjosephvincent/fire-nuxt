import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyDnqitSe6kO5MZj--psv4AXxdC5Ve_Rbrk",
        authDomain: "davao-finds.firebaseapp.com",
        projectId: "davao-finds",
        storageBucket: "davao-finds.firebasestorage.app",
        messagingSenderId: "480532826375",
        appId: "1:480532826375:web:edd25c7bcc7b475d3adda2"
    };

    const app = initializeApp(firebaseConfig)

    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.provide('auth', auth)
    nuxtApp.provide('firestore', firestore)
})