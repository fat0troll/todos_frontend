<template>
    <div class="columns">
        <div class="column s12">
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
  }
}
</script>
