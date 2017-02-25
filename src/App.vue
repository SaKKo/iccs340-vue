<template>
  <div id="app">
    <v-top-bar></v-top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    VTopBar: require('./components/TopBar.vue')
  }
}
</script>

<style>

</style>
