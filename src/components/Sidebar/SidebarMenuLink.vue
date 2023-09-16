<script setup>
const { icon, title, link } = defineProps([
    'icon', 'title', 'link'
])
</script>

<template>
    <span class="flex flex-row items-center justify-start my-5">
        <font-awesome-icon :icon="icon" size="xl" />
        <a class="mx-3" href="">{{ title }}</a>
    </span>
</template>