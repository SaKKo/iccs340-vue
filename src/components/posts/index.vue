<template>
  <div class="posts">
    <md-list class="custom-list md-triple-line" v-for="post in posts">
      <v-post :post="post"></v-post>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

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
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
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
