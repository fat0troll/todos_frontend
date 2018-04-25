<template>
  <tr>
    <td><a :href="'/todos/' + todoItem.id">{{ todoItem.id }}</a></td>
    <td><input type="text" class="input" v-model="todoItem.title" v-on:input="updateTodoItem"></td>
    <td><input type="checkbox" id="checkbox" v-model="todoItem.is_public" v-on:click="updateTodoItem"></td>
  </tr>
</template>

<script>
import {HTTP} from './HTTPClient'

export default {
  name: 'TodoListItem',
  props: ['todoItem'],
  watch: {
    todoItem: function (value, oldValue) {
      alert(JSON.stringify(this.todo))
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
    }
  }
}
</script>
