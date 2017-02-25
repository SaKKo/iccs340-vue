import Vue from 'vue'
import Router from 'vue-router'
import UserSignIn from 'components/UserSignIn'
import Posts from 'components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users/sign_in',
      name: 'User.sign_in',
      component: UserSignIn
    },
    {
      path: '/posts',
      name: 'Posts.index',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'Posts.new',
      component: Posts
    }
  ]
})
