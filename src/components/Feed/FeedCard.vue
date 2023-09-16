<script setup>
const { image } = defineProps(['image'])
</script>
<template>
    <div class="p-3 max-w-sm min-w-sm h-content">
        <div class="bg-white border border-gray-200 rounded-[25px] shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg mx-auto" :src="image" alt="image"
                    style="object-fit: fill!important;" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Awesome Post Title</h5>
                </a>
                <div class="flex flex-row justify-between">
                    <div>
                        <font-awesome-icon class="mx-2 text-red-500" icon="fa-solid fa-heart" size="lg" />
                        <font-awesome-icon class="mx-2 text-black" icon="fa-regular fa-comment" size="lg" />
                        <font-awesome-icon class="mx-2 text-black" icon="fa-regular fa-share-from-square" size="lg" />
                    </div>
                    <div>
                        <font-awesome-icon class="mx-2 text-black" icon="fa-regular fa-save" size="lg" />
                    </div>
                </div>
                <p class="my-3 font-normal text-gray-700 dark:text-gray-400">Look at my awesome post!</p>
            </div>
        </div>
    </div>
</template>
