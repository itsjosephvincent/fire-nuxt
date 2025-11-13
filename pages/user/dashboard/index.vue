<template>
    <div>
        Hello World.
    </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth'

const authStore = useAuthStore()

definePageMeta({
    layout: 'main'
})

onMounted(() => {
    authStore.checkUser()
})
</script>