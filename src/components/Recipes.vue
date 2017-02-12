<template>
  <div class="recipes">
    <div class="row">
      <RecipeCard v-for="recipe in recipes" :recipe="recipe"></RecipeCard>
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
          link: '/recipe/apple-pie'
        },
        {
          name: 'Italian Pizza',
          picture: '',
          link: '/recipe/italian-pizza'
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
