<script setup>
import Search from './Search.vue';
</script>

<template>
    <div class="flex flex-row items-center justify-between w-full p-5">
        <Search />
        
        <div class="flex flex-row justify-start items-center">
            <font-awesome-icon class="text-black mx-3" icon="fa-solid fa-bell" size="xl" />
            <font-awesome-icon class="text-black mx-3" icon="fa-solid fa-envelope" size="xl" />
            <button type="button"
                class="text-white bg-gradient-to-r from-red-400 ml-3 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-[25px] text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <font-awesome-icon class="text-white mx-2" icon="fa-solid fa-plus" />
                Create A Post
            </button>
        </div>
    </div>
</template>
