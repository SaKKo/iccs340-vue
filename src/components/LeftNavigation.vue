<template>
  <div class="left-navigation">
    <md-sidenav class="md-left" ref="sidenav">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item>
            <div class="md-list-text-container">
              <span>John Doe</span>
              <span>johndoe@email.com</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
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
