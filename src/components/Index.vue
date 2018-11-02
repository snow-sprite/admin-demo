<template lang="html">
  <div class="">
    <h3>index</h3>
    <router-link :to="{ name: 'Home', params: {} }"><span @click="adminLogin">admin</span></router-link>
    <router-link :to="{ name: 'Home', params: {} }"><span @click="userLogin">user</span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    adminLogin () {
      sessionStorage.setItem('customToken', 'admin')
    },
    userLogin () {
      sessionStorage.setItem('customToken', 'user')
    }
  }
}
</script>

<style lang="css">
</style>
