<template>
  <div class="post">
    <md-list class="custom-list md-triple-line">
      <v-post :post="post"></v-post>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'

export default {
  name: 'post',
  components: {
    VPost: require('./post.vue')
  },
  data () {
    return {
      post: {},
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      PostsApi.getPost(this.$route.params.post_id, _post => {
        this.post = _post
      })
    }
  }
}
</script>

<style scoped>

</style>
