<template>
    <div class="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-gray-200 bg-opacity-80"
        aria-label="Loading overlay">
        <div class="flex justify-center items-center">
            <!-- Spinner -->
            <div class="w-16 h-16 border-b-4 border-gray-900 rounded-full animate-spin"></div>
        </div>
        <div class="flex justify-center items-center mt-6 text-lg font-medium text-gray-900">
            Loading...
        </div>
    </div>
</template>