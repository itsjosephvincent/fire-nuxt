<template>
    <label for="{{ props.for }}" class="block text-base font-medium text-gray-900">
        {{ props.label }}
    </label>
</template>

<script setup>
const props = defineProps({
    for: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})
</script>