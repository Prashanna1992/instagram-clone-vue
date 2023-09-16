<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="flex flex-row items-center">
    <div class="hidden lg:block w-3/12 h-full">
      <Sidebar />
    </div>
    <div class="flex flex-col items-center justify-center lg:w-9/12 w-full min-h-screen">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
