import {ref, Ref} from "vue"
import IPost from "@/Interfaces/IPost"

class PostService {
    private posts:Ref<Array<IPost>>;
    private post:Ref<IPost>;
    private url;
    
    constructor(){
        this.posts = ref<Array<IPost>>([])
        this.post = ref<IPost>({})
        this.url = "https://jsonplaceholder.typicode.com/posts/"
    }

    getPosts():Ref<Array<IPost>>{
        return this.posts
    }
    getPost():Ref<IPost>{
        return this.post
    }

    async fetchById(id:string|string[]):Promise<void>{
        try {
            const response = await fetch(this.url + id)
            const json = await response.json()
            this.post.value = await json
        }
        catch(error){
            console.log(error)
        }
    }

    async fetchAll():Promise<void>{
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