<template>
  <div id="app">
    <nav-bar></nav-bar>
    <hr>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
