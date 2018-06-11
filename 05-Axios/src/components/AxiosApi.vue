<template>
  <div>
    <ul v-if="posts && posts.length">
        <li v-for='(post, key ) in posts' :key='key'>
            <p><strong>Titúlo: {{post.title}}</strong></p>
            <p>{{post.body}}</p>
        </li>
    </ul>

  </div>
</template>
<script>

/* eslint-disable */
import axios from 'axios'

export default {

    name: 'AxiosApiGitHub.vue',
  
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
