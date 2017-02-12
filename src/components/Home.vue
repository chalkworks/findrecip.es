<template>
  <div class="home container">
    <div class="text-center nav">
      <div class="header">
        <h1>Find Recipes</h1>
        <h5>discover delicious recipes</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped lang="stylus">
@import "../assets/css/config.styl"

.home
  width 100%


.header
  h1
    color header-color
    font-weight 300
  h5
    margin-top 0
    color body-color
    font-family "Inconsolata", monospace
</style>
