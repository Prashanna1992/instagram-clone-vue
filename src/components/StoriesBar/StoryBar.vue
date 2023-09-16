<script setup>
import StoryIcon from './StoryIcon.vue';
</script>
<template>
    <div class="w-full px-5 py-1">
        <div class="prose max-w-none my-3">
            <h1>
                Stories
            </h1>
        </div>
        <div class="w-full my-3 flex flex-row justify-start items-center">
            <StoryIcon :background="false" :live="false" />
            <StoryIcon background="/src/assets/images/highlight1.jpg" :live="false" />
            <StoryIcon background="/src/assets/images/highlight2.jpg" :live="true" />
        </div>
    </div>
</template>