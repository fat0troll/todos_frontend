<template>
  <div class="columns is-multiline">
    <div class="column is-12 notification is-danger" v-if="message">
      <p>Todo saving errors: {{ message }}</p>
    </div>
    <div class="column is-12">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Доступно для всех?</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <todo-list-item :todoItem="todo" v-for="todo in todos" :key="todo.id"></todo-list-item>
        </tbody>
      </table>
    </div>
    <todo-new-form></todo-new-form>
  </div>
</template>

<script>
import {HTTP} from './HTTPClient'
import TodoListItem from '@/components/TodosListItem'
import TodoNewForm from '@/components/TodosNewForm'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
    TodoNewForm
  },
  data () {
    return {
      todos: [],
      message: ''
    }
  },
  beforeCreate: function () {
    var authToken = this.$cookie.get('auth_token')
    if (authToken == null) {
      this.$router.push('/login')
    }
    HTTP.defaults.headers.common['Authorization'] = authToken
    HTTP.get('todos')
      .then(response => {
        this.todos = response.data
      })
      .catch(error => {
        if (error.response) {
          this.message = error.response.data.message
        }
        console.log(error)
      })
  }
}
</script>
