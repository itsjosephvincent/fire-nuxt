<template>
    <div>
        <Loader v-if="state.isPageLoading" />
        <div class="flex h-screen flex-1">
            <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img class="h-10 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company" />
                    </div>

                    <div class="mt-10">
                        <div>
                            <form @submit.prevent="login" class="space-y-6">
                                <div>
                                    <FormLabel for="email" label="Email address" />
                                    <div class="mt-2">
                                        <FormInput type="email" name="email" v-model="state.email" />
                                    </div>
                                </div>

                                <div>
                                    <FormLabel for="password" label="Password" />
                                    <div class="mt-2">
                                        <FormInput type="password" name="password" v-model="state.password" />
                                    </div>
                                </div>

                                <div class="flex items-center justify-between">
                                    <div class="text-base">
                                        <NuxtLink to="/register" class="text-blue-600 hover:text-blue-500">
                                            Create account
                                        </NuxtLink>
                                    </div>

                                    <div class="text-base">
                                        <a href="#" class="text-red-600 hover:text-red-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <FormButton type="submit" class="w-full">Login</FormButton>
                                    <div class="flex items-center justify-center mt-4">
                                        <NuxtLink to="/" class="underline font-bold">Home</NuxtLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative hidden w-0 flex-1 lg:block">
                <img class="absolute inset-0 size-full object-cover"
                    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useUserStore } from '~/store/user'

const nuxtApp = useNuxtApp()
const { $auth } = nuxtApp
const userStore = useUserStore()

const state = reactive({
    email: null,
    password: null,
    isPageLoading: false,
    error: null
})

async function login() {
    state.isPageLoading = true
    try {
        const cred = await signInWithEmailAndPassword($auth, state.email, state.password)
        userStore.setUser(cred.user)
    } catch (error) {
        state.error = error.message
    }
    state.isPageLoading = false
}

</script>
