<template lang="html">
  <div class="">
    <h3>home</h3>
    <div v-for="(val, ind) in newSyncRoute" :key="ind">
      <span v-if="val.name !== '404'"><router-link :to="{ name: val.name, params: {} }">{{val.name}}</router-link></span>
      <!-- 子路由: <span v-for="(v, i) in val.children" :key="i">
        <router-link :to="{ name: v.name, params: {} }">{{v.name}}</router-link>
      </span> -->
      <span v-if="val.children && val.children[0].name !== 'Detail' && val.children.length > 0">
        子路由: <span v-for="(v, i) in val.children" :key="i">
          <router-link :to="{ name: v.name, params: {id: i} }">{{v.name}}</router-link>
        </span>
      </span>
    </div>
    <p><router-link :to="{ name: 'Index', params: {} }">返回Index</router-link></p>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  computed: mapGetters([
    'newSyncRoute'
  ]),
  created () {
    console.log(this.newSyncRoute)
  }
}
</script>

<style lang="css">
</style>
