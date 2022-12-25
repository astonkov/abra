<template>
    <form @submit.prevent>
        <h4>Описание поста</h4>
        <my-input 
        v-model="post.title"
        type="text" 
        placeholder="Name"></my-input>
        <my-input  
        v-model = "post.body"
        class="input" type="text" placeholder="Describe"></my-input>
        
        <my-button 
        style="align-self: flex-end; 
        margin-top: 10px;"

        @click="createPost">Create</my-button>
    </form> 
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost(){
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: ''
            }
        }
    },
}
</script>

<style lang="scss" scoped>

form{
    display: flex;
    flex-direction: column;
}



</style>