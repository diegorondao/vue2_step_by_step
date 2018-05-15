<template>
  <div>
    <ul v-if="posts && posts.length">
        <li v-for="post in posts">
            <p><strong>Titúlo: {{post.title}}</strong></p>
            <p>{{post.body}}</p>
        </li>
    </ul>

  </div>
</template>
<script>

import axios from 'axios'

export default {

    name: 'AxiosApi',
  
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
