<script setup>
const { background, live } = defineProps(['background', 'live'])
</script>

<template>
    <div class="relative">
        <a href="#">
            <img class="w-20 h-20 border-2 border-red-600 object-cover mx-2 max-w-14 rounded-full"
                :src="background ? background : '/src/assets/images/profilepic.jpg'" alt="">
            <div class="absolute right-0 bottom-1.5" v-if="!background">
                <font-awesome-icon class="w-3 h-3 p-2 mx-auto text-white border border-white bg-blue-600 rounded-full"
                    icon="fa-solid fa-plus" size="lg" />
            </div>
        </a>

        <div class="absolute bottom-0 left-4" v-if="live">
            <a href="#"
                class="py-1 px-2 bg-red-600 border text-white bg-gradient-to-r from-red-400 ml-3 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-none text-xs text-center">
                LIVE</a>
        </div>
    </div>
</template>