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
import PostsApi from '../api/posts.js'

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
    PostsApi.getPosts(_posts => {
      next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}
</script>

<style scoped>

</style>
