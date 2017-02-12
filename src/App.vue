<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
/* Global App Styles */
@import "./assets/css/config.styl"
body
  font-family "Inconsolata" monospace
  background light-background
</style>
