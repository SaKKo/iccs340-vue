<template>
  <div class="posts">
    <h1>Posts</h1>
    <ol>
      <li v-for="post in posts">
        <v-post :post="post"></v-post>
      </li>
    </ol>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'posts',
  components: {
    VPost: require('./post.vue')
  },
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('https://stormy-wildwood-38378.herokuapp.com/posts.json')
    .then(function (response) {
      console.log(response)
      next(vm => {
        vm.posts = response.data
      })
    })
  },
  watch: {
    $route () {
      axios.get('https://stormy-wildwood-38378.herokuapp.com/posts.json')
      .then(function (response) {
        console.log(response)
        this.posts = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>
