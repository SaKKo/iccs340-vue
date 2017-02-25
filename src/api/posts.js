import axios from 'axios'

export default {
  getPosts (callback, errCallback) {
    axios.get('https://iccs340-vue-api.herokuapp.com/posts.json')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  createPost (params, callback, errCallback) {
    var postParams = { post: params }
    axios.post('https://iccs340-vue-api.herokuapp.com/posts.json', postParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}
