<template>
  <div class="column is-12">
    <h5 class="is-size-5">New task:</h5>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Awesome new task" v-model="taskName">
        <p class="help-block" v-if="message">{{ message }}</p>
      </div>
      <div class="control">
        <a class="button is-info" v-on:click="createTask">Create</a>
      </div>
    </div>
  </div>
</template>

<script>
import {HTTP} from './HTTPClient'

export default {
  name: 'TodoNewForm',
  props: ['todoID'],
  data () {
    return {
      taskName: '',
      message: ''
    }
  },
  beforeCreate: function () {
    var authToken = this.$cookie.get('auth_token')
    if (authToken == null) {
      this.$router.push('/login')
    }
    HTTP.defaults.headers.common['Authorization'] = authToken
  },
  methods: {
    createTask: function () {
      HTTP.post('todos/' + this.todoID + '/tasks', {
        name: this.taskName
      })
        .then(response => {
          console.log(response)
          this.message = ''
          // this should be auto-loaded via JS logic, but I don't have time for this implementation
          location.reload()
        })
        .catch(error => {
          if (error.response) {
            this.message = error.response.data.message
          }
          console.log(error)
        })
    }
  }
}
</script>
