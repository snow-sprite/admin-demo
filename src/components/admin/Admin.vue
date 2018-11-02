<template lang="html">
  <div class="">
    只有Admin可见
    <p><router-link :to="{ name: 'Home', params: {} }">返回Home</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style lang="css">
</style>
