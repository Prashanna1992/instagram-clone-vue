<script setup>
import { ref, watch } from 'vue'
const { title, image, description } = defineProps(['title', 'image', 'description'])

const liked = ref(false)
const addComment = ref(false)

var like = Math.floor(Math.random() * 1000) + 100

const likePost = () => {
    liked.value = !liked.value
    liked.value ? like++ : like--
}

watch(addComment, () => {
    $redrawVueMasonry()
})


</script>
<template>
    <div v-masonry-tile class="w-96 m-2 h-content grid-item">
        <div class="bg-white border-2 border-red-100 rounded-[25px] shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="w-full p-5 flex flex-row items-center justify-start">
                <img src="src/assets/images/highlight1.jpg" alt="" class="w-12 h-12 rounded-full">
                <div class="flex flex-col items-center justify-start text-black text-left ml-3">
                    <span class="font-bold text-left w-full">
                        Prashanna
                    </span>
                    <span class="w-full text-left">
                        Kathmandu, Nepal
                    </span>
                </div>
            </div>
            <a class="" href="#">
                <img class="rounded-lg mx-auto p-3 " :src="image" alt="image" style="object-fit: fill!important;" />
            </a>
            <div class="p-5">

                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ title }}</h5>
                </a>
                <div class="flex flex-row justify-between">
                    <div>
                        <font-awesome-icon class="mx-2" @click="likePost" :class="liked ? 'text-red-500' : 'text-black'"
                            :icon="liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" size="lg" />
                        <font-awesome-icon @click="addComment = !addComment" class="mx-2 text-black"
                            icon="fa-regular fa-comment" size="lg" />
                        <font-awesome-icon class="mx-2 text-black" icon="fa-regular fa-share-from-square" size="lg" />
                    </div>
                    <div>
                        <font-awesome-icon class="mx-2 text-black" icon="fa-regular fa-save" size="lg" />
                    </div>
                </div>
                <span class="text-sm text-black font-bold py-3">
                    {{ like }} likes
                </span>
                <p class="my-3 font-normal text-gray-700 dark:text-gray-400">{{ description }}</p>

                <div class="w-full" v-if="addComment">
                    <input type="text"
                        class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[25px] bg-white"
                        placeholder="Add a comment.." required>
                </div>
            </div>
        </div>
    </div>
</template>
