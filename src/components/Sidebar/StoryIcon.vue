<script setup>
const { background } = defineProps(['background'])
</script>

<template>
    <span class="w-14 h-14 border-2 border-black mx-2 p-5 bg-gray-300 rounded-full flex flex-row items-center" v-if="!background">
        <font-awesome-icon class="mx-auto" icon="fa-solid fa-plus" size="lg" />
    </span>

    <img class="w-14 h-14 border-2 border-red-600 object-cover mx-2 max-w-14 rounded-full" :src="background" alt="" v-else>
</template>