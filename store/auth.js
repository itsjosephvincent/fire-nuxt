import { defineStore } from "pinia"
import { onAuthStateChanged } from "firebase/auth"

export const useAuthStore = defineStore("authStore", {
    actions: {
        checkUser() {
            const nuxtApp = useNuxtApp()
            const { $auth } = nuxtApp

            onAuthStateChanged($auth, (user) => {
                if (!user) {
                    navigateTo('/')
                }
            })
        }
    }
});