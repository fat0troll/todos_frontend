<template>
  <div class="columns">
    <div class="column is-12">
      <p class="title">{{ title }}</p>
      <p class="subtitle" v-html="subtitle"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data () {
    return {
      title: 'Welcome to ToDo application',
      subtitle: 'Please <a href="/login">login</a> or <a href="/register">register</a>.'
    }
  },
  created: function () {
    if (this.$cookie.get('auth_token') != null) {
      // user is logged in
      this.subtitle = 'Your to-dos is available <a href="/todos">here</a>.'
    }
  }
}
</script>
