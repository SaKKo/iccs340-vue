<template>
  <div class="user-sign-in">
    <h1>LOGIN</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'user-sign-in',
  data () {
    return {
      msg: 'Hello, you should Login'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('watch')
    next(true)
  },
  watch: {
    $route () {
      console.log('watch')
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
