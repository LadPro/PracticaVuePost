<template>
    <div>
        <div>
            <h1>Titulo</h1>
            <h3>{{post.title}}</h3>
        </div>

        <div>
            <h1>Contenido</h1>
            <h3>{{post.body}}</h3>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import PostService from '@/services/PostService'

const service = new PostService
let post = service.getPost()


onMounted(async()=>{
    const route = useRoute()
    let id = route.params.id
    await service.fetchById(id)
    
})

</script>

<style scoped>
</style>