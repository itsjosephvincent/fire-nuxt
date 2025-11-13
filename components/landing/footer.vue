<template>
    <footer class="bg-white">
        <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center gap-x-6 md:order-2">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                    class="text-gray-600 hover:text-gray-800">
                    <span class="sr-only">{{ item.name }}</span>
                    <component :is="item.icon" class="size-6" aria-hidden="true" />
                </a>
            </div>
            <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
                &copy; 2025 Influx Web Solutions, Inc. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = [
    {
        name: 'Facebook',
        href: '#',
        icon: defineComponent({
            render: () =>
                h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                    h('path', {
                        'fill-rule': 'evenodd',
                        d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                        'clip-rule': 'evenodd',
                    }),
                ]),
        }),
    },
]
</script>