<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <div class="field">
        <label class="label">Your e-mail</label>
          <div class="control">
            <input class="input" type="email" placeholder="example@example.com" v-model="email">
            <p class="help-block" v-if="message">{{ message }}</p>
          </div>
        </div>
      </div>
    <div class="column is-12">
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Enter your password" v-model="password">
        </div>
      </div>
    </div>
    <div class="column is-12">
      <a class="button" v-on:click="loginDo">Login</a>
    </div>
  </div>
</template>

<script>
import {HTTP} from './HTTPClient'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      message: '',
      auth_token: ''
    }
  },
  beforeCreate: function () {
    if (this.$cookie.get('auth_token') != null) {
      this.$router.push('/')
      vm.$forceUpdate()
    }
  },
  methods: {
    loginDo: function () {
      HTTP.post('login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          this.$cookie.set('auth_token', response.data.auth_token, 3)
          this.$router.push('/')
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
