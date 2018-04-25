<script>
export default {
  name: 'Logout',
  created: function () {
    this.$cookie.delete('auth_token')
    this.$router.push('/')
    vm.$forceUpdate()
  }
}
</script>
