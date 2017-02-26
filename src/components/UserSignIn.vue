<template>
  <div class="user-sign-in">
    <md-list class="md-double-line">
      <md-subheader class="md-inset">New Post</md-subheader>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Email</label>
            <md-input v-model="email" placeholder=""></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <md-avatar class="md-avatar-icon">
          <md-icon>folder</md-icon>
        </md-avatar>
        <div class="md-list-text-container">
          <md-input-container>
            <label>Password</label>
            <md-input v-model="password" placeholder="" type="password" @keyup.enter.native="login"></md-input>
          </md-input-container>
        </div>
      </md-list-item>
      <md-list-item>
        <span style="flex: 1"></span>
        <md-button class="md-raised md-primary" @click.native="login">Login</md-button>
        <span style="flex: 1"></span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import UsersApi from '../api/users.js'
import router from '../router'

export default {
  name: 'user-sign-in',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('enter')
      UsersApi.login(this.email, this.password, function (_response) {
        router.push({ name: 'Posts.index' })
      })
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>
