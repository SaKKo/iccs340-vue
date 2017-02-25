<template>
  <div class="login">
    <h1>LOGIN</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Hello, you should login'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('watch')
    axios.get('https://stormy-wildwood-38378.herokuapp.com/posts.json')
    .then(function (response) {
      console.log(response)
      next(true)
    })
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
