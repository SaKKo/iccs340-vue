<template>
  <div id="app">
    <v-top-bar @toggleLeftSidenav="toggleLeftSidenav"></v-top-bar>
    <router-view></router-view>
    <v-left-navigation ref="leftSidenav"></v-left-navigation>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    VTopBar: require('./components/TopBar.vue'),
    VLeftNavigation: require('./components/LeftNavigation.vue')
  },
  methods: {
    toggleLeftSidenav () {
      console.log('toggleLeftSidenav')
      this.$refs.leftSidenav.toggle()
    },
    closeLeftSidenav () {
      this.$refs.leftSidenav.close()
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

<style>

</style>
