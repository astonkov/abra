<template>
    <div class = "app">
        <post-form
            @create="createPost"
        />
        <post-list 
            :posts="posts"
            @remove="removePost"
        />
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
export default {
    components:{
        PostList, PostForm, 
    },
    data() {
        return {
            posts: [
                { id: 1, title: 'Javascript 1', body: "Decribe" },
                { id: 2, title: 'Javascript 2', body: "Decribe" },
                { id: 3, title: 'Javascript 3', body: "Decribe" },
            ],
        }

    },
    methods: {
        createPost(post){
            this.posts.push(post);
            // console.log(post);
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        }

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app{
    padding: 20px;
}


</style>