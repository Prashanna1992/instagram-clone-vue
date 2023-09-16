<script setup>
import SidebarMenuLink from './SidebarMenuLink.vue';
</script>

<template>
    <div class="flex flex-col p-5 items-start justify-between w-full">
        <SidebarMenuLink title="Feed" icon="fa-solid fa-house" />
        <SidebarMenuLink title="Explore" icon="fa-solid fa-magnifying-glass" />
        <SidebarMenuLink title="Reels" icon="fa-solid fa-film" />
        <SidebarMenuLink title="Setting" icon="fa-solid fa-gear" />
        <SidebarMenuLink title="Logout" icon="fa-solid fa-arrow-right-from-bracket" />
    </div>
</template>