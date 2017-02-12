import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Recipe from 'components/Recipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recipe/:name',
      name: 'Recipe',
      component: Recipe
    }
  ]
})
