<template>
    <div>
        <Loader v-if="state.isPageLoading" />
        <div class="flex h-screen flex-1">
            <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <img class="h-10 w-auto" src="/public/img/influx.webp" alt="Your Company" />
                    </div>

                    <h1 class="text-2xl mt-10 font-semibold">
                        Register to Influx Payroll
                    </h1>

                    <div class="mt-10">
                        <div>
                            <div class="flex items-center justify-center">
                                <Alert v-if="state.error">{{ state.error }}</Alert>
                            </div>
                            <form @submit.prevent="register" class="space-y-6">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
                                    <div>
                                        <FormLabel for="firstname" label="First name" />
                                        <div class="mt-2">
                                            <FormInput type="text" name="firstname" v-model="state.firstname" />
                                            <FormError :error="v$?.firstname?.$errors[0]?.$message.toString()" />
                                            <FormError :error="state.error?.errors?.firstname?.[0]" />
                                        </div>
                                    </div>

                                    <div>
                                        <FormLabel for="lastname" label="Last name" />
                                        <div class="mt-2">
                                            <FormInput type="text" name="lastname" v-model="state.lastname" />
                                            <FormError :error="v$?.lastname?.$errors[0]?.$message.toString()" />
                                            <FormError :error="state.error?.errors?.lastname?.[0]" />
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <FormLabel for="email" label="Email address" />
                                    <div class="mt-2">
                                        <FormInput type="email" name="email" v-model="state.email" />
                                        <FormError :error="v$?.email?.$errors[0]?.$message.toString()" />
                                        <FormError :error="state.error?.errors?.email?.[0]" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div>
                                        <FormLabel for="password" label="Password" />
                                    </div>
                                    <div class="mt-2">
                                        <FormInput type="password" name="password" v-model="state.password" />
                                        <FormError :error="v$?.password?.$errors[0]?.$message.toString()" />
                                        <FormError :error="state.error?.errors?.password?.[0]" />
                                    </div>
                                </div>

                                <div class="grid grid-cols-1">
                                    <div>
                                        <FormLabel for="password_confirmation" label="Confirm password" />
                                    </div>
                                    <div class="mt-2">
                                        <FormInput type="password" name="password_confirmation"
                                            v-model="state.passwordConfirmation" />
                                        <FormError :error="v$?.password?.$errors[0]?.$message.toString()" />
                                        <FormError :error="state.error?.errors?.password?.[0]" />
                                    </div>
                                </div>

                                <div>
                                    <FormButton type="submit" class="w-full">Register</FormButton>
                                </div>
                            </form>
                            <div class="flex items-center justify-center mt-4">
                                <div class="text-base">
                                    <NuxtLink to="/login"
                                        class="font-semibold text-black-600 hover:text-black-500 underline">
                                        Login instead
                                    </NuxtLink>
                                </div>
                            </div>
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
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useUserStore } from '~/store/user'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

const nuxtApp = useNuxtApp()
const { $auth, $firestore } = nuxtApp
const userStore = useUserStore()

const state = reactive({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    passwordConfirmation: null,
    isPageLoading: false,
    error: null
})

watch(() => state.passwordConfirmation, (newValue) => {
    if (state.password != null && state.password !== newValue) {
        state.error = 'Passwords do not match.'
    } else {
        state.error = null
    }
})

const rules = computed(() => {
    return {
        firstname: {
            required: helpers.withMessage('This field is required.', required),
        },
        lastname: {
            required: helpers.withMessage('This field is required.', required),
        },
        email: {
            required: helpers.withMessage('This field is required.', required),
        },
        password: {
            required: helpers.withMessage('This field is required.', required),
        },
        passwordConfirmation: {
            required: helpers.withMessage('This field is required.', required),
        },
    }
})

const v$ = useVuelidate(rules, state)

async function register() {
    v$.value.$validate()
    if (!v$.value.$error) {
        state.isPageLoading = true
        try {
            const cred = await createUserWithEmailAndPassword($auth, state.email, state.password)
            const companyRef = await addDoc(collection($firestore, 'companies'), {
                name: ''
            })
            await addDoc(collection($firestore, 'users'), {
                company_id: companyRef.id,
                user_id: cred.user.uid,
                firstname: state.firstname,
                lastname: state.lastname,
                role: 'Admin'
            })
            userStore.setUser(cred.user)
            navigateTo('/user/dashboard')
        } catch (error) {
            state.error = error.message
        }
    }
    state.isPageLoading = false
}

</script>
