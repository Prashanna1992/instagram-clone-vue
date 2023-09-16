<script setup>
import Logo from './Sidebar/Logo.vue';
import ProfileInfo from './Sidebar/ProfileInfo.vue'
import Stats from './Sidebar/Stats.vue'
import Bio from './Sidebar/Bio.vue'
import StoryHighlight from './Sidebar/StoryHighlight.vue';
import SidebarMenu from './Sidebar/SidebarMenu.vue';
</script>
<template>
    <div class="w-full p-0 m-0">
        <div class="bg-white text-black min-h-screen">
            <Logo />
            <ProfileInfo />
            <Stats />
            <Bio />
            <StoryHighlight />
            <SidebarMenu />
        </div>
    </div>
</template>
