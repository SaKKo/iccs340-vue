<template>
  <div class="comments">
    <md-list v-for="comment in comments">
      <md-list-item>
        <md-avatar>
          <md-icon>account_circle</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <span>{{ comment.user.email }}</span>
          <span>{{ comment.content }}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>

export default {
  name: 'comments',
  props: {
    comments: {
      type: Array,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .md-list-item {
    padding-left: 40px;
  }
</style>
