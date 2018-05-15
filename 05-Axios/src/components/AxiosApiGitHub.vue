<template>
  <div>
    <form @submit.prevent="search">
        <input v-model="username" placeholder="Enter a github username">
        
    </form>
  </div>
</template>
<script>

import Vue from 'vue'
import axios from 'axios'

export default {

    name: 'AxiosApiGitHub',
  
    data () {
        return {
            posts: [],
            errors: [],
        }
    },

    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response =>{

            this.posts = response.data
        })
        .catch( e => {
            this.errors.push(e)
        })
    }
}
</script>
