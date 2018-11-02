<template lang="html">
  <div class="show">
    <h2>404页</h2>
    <p><router-link :to="{ name: 'Home', params: {} }">返回Home</router-link></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.show{
  margin: 0 auto;
}
</style>
