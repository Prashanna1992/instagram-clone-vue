<script setup>
import FeedCard from './FeedCard.vue';
import posts from '/src/data/posts.json'

</script>
<template>
    <div class="p-5 w-full">
        <div class="prose max-w-none my-3">
            <h1>
                Feed
            </h1>
        </div>
        <div class="w-full">
            <div class="mx-auto" v-masonry fit-width="true" horizontal-order="false" transition-duration="2s" stagger="0.05s"
                item-selector=".grid-item">
                <ul>
                    <li v-for="(post, index) in posts" :key="index">
                        <FeedCard :description="post.description" :title="post.title" :image="post.image" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>