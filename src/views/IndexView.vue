<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">   
                <router-link :to="{name: 'post', params: {id: post.id, title: post.title, body: post.body}}">
                    <h3>Titulo</h3>
                    {{ post.title }}
                </router-link>
            </li>
        </ul>
        {{ posts }}
    </div>
</template>

<script lang="ts" setup>
import PostService from "@/services/PostService"
import { onMounted } from "vue";

const service = new PostService
const posts = service.getPost()

onMounted(async ()=>{
    await service.fetchAll()
})


</script>

<style scoped lang="scss">
ul {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    li{
        display: flex;
        flex-direction: column;
        width: 30vw;
        border: 1px solid black;
        padding: 5px;

    }
    li:hover{
        box-shadow: 5px 5px 3px 0px rgba(0,0,0,0.5);
    }
}

</style>