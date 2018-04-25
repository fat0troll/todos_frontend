<template>
  <tr>
    <td><input type="text" class="input" v-model="taskItem.name" v-on:input="updateTaskItem"></td>
    <td><input type="checkbox" id="checkbox" v-model="taskItem.done" v-on:click="updateTaskItem"></td>
    <td><a v-on:click="deleteTaskItem">Delete</a></td>
  </tr>
</template>

<script>
import {HTTP} from './HTTPClient'

export default {
  name: 'TaskListItem',
  props: ['taskItem', 'todoID'],
  beforeCreate: function () {
    var authToken = this.$cookie.get('auth_token')
    if (authToken == null) {
      this.$router.push('/login')
    }
    HTTP.defaults.headers.common['Authorization'] = authToken
  },
  methods: {
    updateTaskItem: function () {
      HTTP.put('todos/' + this.todoID + '/tasks/' + this.taskItem.id, {
        name: this.taskItem.name,
        done: this.taskItem.done
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteTaskItem: function () {
      HTTP.delete('todos/' + this.todoID + '/tasks/' + this.taskItem.id)
        .then(response => {
          console.log(response)
          location.reload()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
