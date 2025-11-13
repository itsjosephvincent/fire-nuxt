<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-7xl sm:text-center">
                <h2 class="text-base/7 font-semibold text-indigo-600">Pricing</h2>
                <p
                    class="mt-2 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-balance sm:text-6xl">
                    Simple pricing for every business
                </p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-600 sm:text-center sm:text-xl/8">
                Choose a plan that gives you the payroll tools you need—whether you're just starting out or managing a
                growing team.
            </p>
            <div class="mt-20 flow-root">
                <div
                    class="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
                    <div v-for="tier in tiers" :key="tier.id" class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                        <h3 :id="tier.id" class="text-base/7 font-semibold text-gray-900">{{ tier.name }}</h3>
                        <p class="mt-6 flex items-baseline gap-x-1">
                            <span class="text-5xl font-semibold tracking-tight text-gray-900">
                                {{ tier.price.monthly }}
                            </span>
                            <span class="text-sm/6 font-semibold text-gray-600">/month</span>
                        </p>
                        <p class="mt-10 text-sm/6 font-semibold text-gray-900">{{ tier.description }}</p>
                        <ul role="list" class="mt-6 space-y-3 text-sm/6 text-gray-600">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <CheckCircleIcon class="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '#',
        price: { monthly: '₱1,500' },
        description: 'Everything necessary to get started.',
        features: [
            'Employee records',
            'Basic attendance tracking',
            'Digital payslips',
        ],
    },
    {
        name: 'Essential',
        id: 'tier-essential',
        href: '#',
        price: { monthly: '₱2,500' },
        description: 'Everything in Basic, plus essential tools for growing your business.',
        features: [
            'Everything in Basic',
            'Overtime & holiday pay calculation',
            'Leave & absence tracking',
            'Automatic government contribution updates',
        ],
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '₱5,000' },
        description: 'Everything in Essential, plus collaboration tools and deeper insights.',
        features: [
            'Everything in Essential',
            'Multi-client management (Good for man power agencies)',
            'QR code based attendance system',
            'Employee self-service (payslips & leave filing)',
            'Billing / Invoicing'
        ]
    },
]
</script>