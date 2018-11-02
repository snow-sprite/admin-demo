<template>
  <div class="hello">
    666{{this.$router.options}}
    <p class="num">123</p>
    <Child class="child">
      <p>不具名something...</p>
      <section name="is">isShow</section>
      <p>不具名ts</p>
      <div slot="iss">具名</div>
      <div>不具名t...</div>
    </Child>
  </div>
</template>

<script>
import Child from '@/components/Child.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Child
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
