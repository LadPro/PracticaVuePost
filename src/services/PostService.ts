import {ref, Ref} from "vue"

class PostService {
    private posts;
    private url;
    
    constructor(){
        this.posts = ref([])
        this.url = "https://jsonplaceholder.typicode.com/posts/"
    }

    getPost(){
        return this.posts
    }

    async fetchById(id:number){
        try {
            const response = await fetch(this.url + id)
            const json = await response.json()
            this.posts.value = await json
        }
        catch(error){
            console.log(error)
        }
    }

    async fetchAll() {
        try {
            const response = await fetch(this.url)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error)
        }        
    }
}


export default PostService