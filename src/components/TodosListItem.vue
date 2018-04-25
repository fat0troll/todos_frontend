<template>
  <tr>
    <td><a :href="'/todos/' + todoItem.id">{{ todoItem.id }}</a></td>
    <td><input type="text" class="input" v-model="todoItem.title" v-on:input="updateTodoItem"></td>
    <td><input type="checkbox" id="checkbox" v-model="todoItem.is_public" v-on:click="updateTodoItem"></td>
    <td><a v-on:click="deleteTodoItem">Delete</a></td>
  </tr>
</template>

<script>
import {HTTP} from './HTTPClient'

export default {
  name: 'TodoListItem',
  props: ['todoItem'],
  beforeCreate: function () {
    var authToken = this.$cookie.get('auth_token')
    if (authToken == null) {
      this.$router.push('/login')
    }
    HTTP.defaults.headers.common['Authorization'] = authToken
  },
  methods: {
    updateTodoItem: function () {
      HTTP.put('todos/' + this.todoItem.id, {
        title: this.todoItem.title,
        is_public: this.todoItem.is_public
      })
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteTodoItem: function () {
      HTTP.delete('todos/' + this.todoItem.id)
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
