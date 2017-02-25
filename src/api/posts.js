import axios from 'axios'

export default {
  getPosts (callback) {
    axios.get('https://iccs340-vue-api.herokuapp.com/posts.json')
    .then(function (response) {
      callback(response.data)
    })
  }
}
