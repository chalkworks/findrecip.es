<template>
  <div class="recipe col">
    <router-link :to="recipe.link">
    <h3>{{recipe.name}}</h3>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'RecipeCard',
    props: ['recipe']
  }
</script>

<style scoped lang="stylus">
@import "../assets/css/config.styl"
.recipe
  padding 3rem
  min-width 35%
  min-height 250px
  background light-background
  box-shadow 0px 10px 50px header-color
  border-radius 10px
  transition all 0.2s ease
  &:hover
    box-shadow 0px 5px 75px header-color
  h3
    color header-color
    font-weight 700
  a
    text-decoration none
</style>
