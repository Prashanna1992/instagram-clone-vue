<script setup>
import FeedCard from './FeedCard.vue';
</script>
<template>
    <div class="w-full overflow-y-scroll flex flex-row flex-wrap justify-between p-12">
        <FeedCard image="/src/assets/images/profilepic.jpg" />
        <FeedCard image="/src/assets/images/cover_image.jpg" />
        <FeedCard image="/src/assets/images/highlight1.jpg"/>
        <FeedCard image="/src/assets/images/studioimage.jpg" />
        <FeedCard image="/src/assets/images/highlight1.jpg"/>
        <FeedCard image="/src/assets/images/cover_image.jpg" />
        <FeedCard image="/src/assets/images/acousticguitar.jpg" />
        <FeedCard image="/src/assets/images/cover_image.jpg" />
        <FeedCard image="/src/assets/images/highlight1.jpg"/>
    </div>
</template>