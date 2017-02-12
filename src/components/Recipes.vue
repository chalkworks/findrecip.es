<template>
  <div class="recipes">
    <div class="row">
      <Recipe v-for="recipe in recipes" :recipe="recipe"></Recipe>
    </div>
  </div>
</template>

<script>
  import Recipe from './Recipe.vue'
  export default {
    name: 'Recipes',
    data () {
      return {
        recipes: [{
          name: 'Apple Pie',
          picture: ''
        },
        {
          name: 'Italian Pizza',
          picture: ''
        }]
      }
    },
    components: {
      Recipe
    }
  }
</script>

<style lang="stylus">
.row
  display flex
  justify-content center
</style>
