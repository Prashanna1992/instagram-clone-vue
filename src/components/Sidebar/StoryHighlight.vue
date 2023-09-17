<script setup>
import StoryIcon from './StoryIcon.vue';
</script>


<template>
    <div class="w-full px-5 flex flex-col items-center">
        <span class="text-sm font-bold w-full">
            Story HighLights
        </span>
        <span class="w-full flex flex-row items-center justify-start my-5">
            <StoryIcon :background="null"/>
            <StoryIcon background="/src/assets/images/highlight1.jpg"/>
            <StoryIcon background="/src/assets/images/highlight2.jpg"/>
        </span>
    </div>
</template>