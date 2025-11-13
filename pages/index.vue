<template>

    <Head>
        <Title>{{ runtimeConfig?.public?.appName }}</Title>
    </Head>

    <LandingHero />
    <LandingCallToAction />
    <LandingPricing />
    <LandingFooter />
</template>


<script setup>
import { ref } from 'vue'
import { useUserStore } from '~/store/user'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const runtimeConfig = useRuntimeConfig()

const nuxtApp = useNuxtApp()
const { $auth } = nuxtApp
const userStore = useUserStore()

const state = reactive({
    isPageLoading: false,
    error: null,
    isUserLoggedIn: false
})

onMounted(() => {
    onAuthState()
})

async function logout() {
    state.isPageLoading = true
    try {
        await signOut($auth)
        userStore.resetUser()
        state.isUserLoggedIn = false
    } catch (error) {
        state.error = error
    }
    state.isPageLoading = false
}

async function onAuthState() {
    onAuthStateChanged($auth, (user) => {
        if (user) {
            state.isUserLoggedIn = true
        } else {
            state.isUserLoggedIn = false
        }
    })
}

const mobileMenuOpen = ref(false)
</script>