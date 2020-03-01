<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/styles/main.scss';

#app {
  width: 100%;
  height: 100%;
}
</style>
