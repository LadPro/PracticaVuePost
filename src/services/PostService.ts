import {ref, Ref} from "vue"

class PostService {
    private posts;

    constructor(){
        this.posts = ref([])
    }

    getPost(){
        return this.posts
    }

    async fetchAll() {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts"
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error)
        }        
    }
}


export default PostService