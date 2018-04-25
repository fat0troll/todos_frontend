<template>
  <div class="columns is-multiline">
    <div class="column is-12 notification is-danger" v-if="message">
      <p>Registration errors: {{ message }}</p>
    </div>
    <div class="column is-12">
      <div class="field">
        <label class="label">Your e-mail</label>
          <div class="control">
            <input class="input" type="email" placeholder="example@example.com" v-model="email">
          </div>
        </div>
      </div>
    <div class="column is-12">
      <div class="field">
        <label class="label">Type your password</label>
        <div class="control">
          <input class="input" type="password" placeholder="Enter your password" v-model="password">
        </div>
      </div>
    </div>
    <div class="column is-12">
      <div class="field">
        <label class="label">Type your password again</label>
        <div class="control">
          <input class="input" type="password" placeholder="Enter your password again" v-model="password_confirmation">
        </div>
      </div>
    </div>
    <div class="column is-12">
      <a class="button" v-on:click="registerDo">Register</a>
    </div>
  </div>
</template>

<script>
import {HTTP} from './HTTPClient'

export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      message: '',
      auth_token: ''
    }
  },
  beforeCreate: function () {
    if (this.$cookie.get('auth_token') != null) {
      this.$router.push('/')
    }
  },
  methods: {
    registerDo: function () {
      HTTP.post('signup', {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
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
