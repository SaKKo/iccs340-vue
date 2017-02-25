<template>
  <div class="top-bar">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">My App</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item class="md-inset">
          <router-link :to="{ name: 'User.sign_in'}">User</router-link>
        </md-list-item>
        <md-list-item class="md-inset">
          <router-link :to="{ name: 'Posts.index'}">Posts</router-link>
        </md-list-item>
        <md-list-item class="md-inset">
          <router-link :to="{ name: 'Posts.new'}">New Post</router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>

export default {
  name: 'top-bar',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
    }
  }
}
</script>

<style scoped>

</style>
