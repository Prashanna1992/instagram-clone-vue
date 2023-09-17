<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="flex flex-row items-center w-full h-full">
    <div class="hidden lg:block w-3/12 h-full shadow-lg shadow-black">
      <Sidebar />
    </div>
    <div class="flex flex-col items-center justify-center lg:w-9/12 w-full h-full bg-[#f6f6f6]"
      style="overflow-y: scroll!important;">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
