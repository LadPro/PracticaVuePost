<template>
    <div>
        {{ post }}
    </div>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService"
import { onMounted } from "vue";

const service = new PostService
const post = service.getPost()

onMounted(async ()=>{
    await service.fetchAll()
})


</script>

<style scoped>
</style>