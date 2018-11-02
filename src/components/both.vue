<template lang="html">
  <div class="">
    admin和user都可见
    <div v-for="(val, ind) in newSyncRoute" :key="ind">
      <div v-if="val.name == 'Both'" v-for="(v, i) in val.children" :key="i">
        <router-link :to="{ name: v.name, params: {id: i} }">{{v.name}}</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Detail from '@/components/Detail'
import { mapGetters } from 'vuex'
export default {
  name: 'Both',
  computed: mapGetters([
    'newSyncRoute'
  ]),
  components: {
    Detail
  },
  created () {
    console.log(this.newSyncRoute)
  }
}
</script>

<style lang="css">
</style>
