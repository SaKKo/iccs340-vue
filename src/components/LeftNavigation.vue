<template>
  <div class="left-navigation">
    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar class="md-account-header">
        <md-menu>
          <md-button md-menu-trigger>Guest</md-button>

          <md-menu-content>
            <md-menu-item>Login</md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-toolbar>

      <md-list>
        <md-list-item class="md-primary">
          <router-link :to="{ name: 'Posts.index' }" @click.native="$refs.sidenav.toggle()">
            <md-icon>insert_drive_file</md-icon>
              <span>
                Posts
              </span>
            </router-link>
        </md-list-item>
        <md-list-item class="md-primary">
          <router-link :to="{ name: 'Posts.new' }" @click.native="$refs.sidenav.toggle()">
            <md-icon>insert_drive_file</md-icon>
              <span>
                New Post
              </span>
            </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>

</template>

<script>
export default {
  name: 'left-navigation',
  methods: {
    toggle () {
      this.$refs.sidenav.toggle()
    }
  }
}
</script>

<style scoped>

</style>
