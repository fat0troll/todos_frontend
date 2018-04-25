<template>
  <div class="columns is-multiline">
    <div class="column is-12 notification is-danger" v-if="message">
      <p>Tasks errors: {{ message }}</p>
    </div>
    <div class="column is-12">
      <h5 class="is-size-5">Todo: {{ todo.title }} </h5>
      <table class="table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Выполнено?</th>
          </tr>
        </thead>
        <tbody>
          <task-list-item :todoID="todo.id" :taskItem="task" v-for="task in tasks" :key="task.id"></task-list-item>
        </tbody>
      </table>
    </div>
    <task-new-form :todoID="todo.id"></task-new-form>
  </div>
</template>

<script>
import {HTTP} from './HTTPClient'
import TaskListItem from '@/components/TasksListItem'
import TaskNewForm from '@/components/TasksNewForm'

export default {
  name: 'TaskList',
  components: {
    TaskListItem,
    TaskNewForm
  },
  data () {
    return {
      todo: Object,
      tasks: [],
      message: ''
    }
  },
  beforeCreate: function () {
    var authToken = this.$cookie.get('auth_token')
    if (authToken == null) {
      this.$router.push('/login')
    }
    HTTP.defaults.headers.common['Authorization'] = authToken
    HTTP.get('todos/' + this.$route.params.todo_id)
      .then(response => {
        this.todo = response.data
      })
      .catch(error => {
        console.log(error)
        this.$router.push('/todos')
      })
    HTTP.get('todos/' + this.$route.params.todo_id + '/tasks')
      .then(response => {
        this.tasks = response.data
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
