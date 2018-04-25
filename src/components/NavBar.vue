<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">ToDo</a>
    </div>
    <div class="navbar-end" v-if="user == 'true'">
      <a class="navbar-item" href="/todos">Todos</a>
      <a class="navbar-item" href="/logout">Log out</a>
    </div>
    <div class="navbar-end" v-else>
      <a class="navbar-item" href="/login">Login</a>
      <a class="navbar-item" href="/register">Register</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  created: function () {
    if (this.auth_token != null) {
      this.user = 'true'
    } else {
      this.user = 'false'
    }
  },
  computed: {
    user: function () {
      if (this.$cookie.get('auth_token') != null) {
        // user is logged in
        return 'true'
      }
      return 'false'
    },
    auth_token: function () {
      return this.$cookie.get('auth_token')
    }
  }
}
</script>
