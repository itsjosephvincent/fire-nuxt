<template>
    <p class="text-xs text-red-500 font-medium mt-1" v-if="props.error">
        {{ props.error }}
    </p>
</template>

<script setup lang="ts">
const props = defineProps({
    error: {
        type: String,
        required: false,
    },
})
</script>