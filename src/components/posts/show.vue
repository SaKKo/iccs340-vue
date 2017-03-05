<template>
  <div class="post">
    <md-list class="md-triple-line">
      <v-post :post="post"></v-post>
    </md-list>
    <md-list class="md-double-line md-dense">
      <v-comments :comments="comments"></v-comments>
      <v-new-comment :post="post"></v-new-comment>
    </md-list>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import CommentsApi from '../../api/comments.js'

export default {
  name: 'post',
  components: {
    VPost: require('./post.vue'),
    VComments: require('../comments/index.vue'),
    VNewComment: require('../comments/new.vue')
  },
  data () {
    return {
      post: {},
      comments: [],
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
        CommentsApi.getComments(_post.id, _comments => {
          this.comments = _comments
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
