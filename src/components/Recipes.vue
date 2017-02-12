<template>
  <div class="recipes">
    <div class="row">
      <Recipe-Card v-for="recipe in recipes" :recipe="recipe"></Recipe-Card>
    </div>
  </div>
</template>

<script>
  import RecipeCard from './RecipeCard.vue'
  export default {
    name: 'Recipes',
    data () {
      return {
        recipes: [{
          name: 'Apple Pie',
          picture: '',
          link: '/recipes/apple-pie'
        },
        {
          name: 'Italian Pizza',
          picture: '',
          link: '/recipes/italian-pizza'
        }]
      }
    },
    created () {
      // fetch recipes from API here
    },
    components: {
      RecipeCard
    }
  }
</script>

<style lang="stylus">
.row
  display flex
  justify-content center
</style>
