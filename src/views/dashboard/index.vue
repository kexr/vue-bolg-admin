<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="bar">
      <div class="content" v-bind:style=sty(val) v-for="val in color" v-bind:key="val"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      color: ['red','blue','yellow'],
      sty(color){
        return { 'background-color': color };
      }
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .bar{
    display: flex;
    width: 100px;
    height: 20px;
  }
  .content{
    flex: 1;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
