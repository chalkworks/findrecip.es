<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">

      <span class="mdl-layout-title">Find Recipes </span>

      <div class="mdl-layout-spacer"></div>

      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link to="/" class="item mdl-navigation__link" active-class="active" exact>Home</router-link>
             <router-link v-if="currentUser" class="item mdl-navigation__link" to="/profile" active-class="active">Profile</router-link>
      <div v-if="currentUser" @click="signOut" class="link item mdl-navigation__link">Sign Out</div>
      <router-link v-else class="item mdl-navigation__link" to="/signin" active-class="active">Sign In</router-link>
      </nav>
    </div>
  </header>


</div>
</template>



<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      currentUser: null
    }),
    created () {
      firebase.auth().onAuthStateChanged((user) => {
        console.log('currentUser: ' + user)
        this.currentUser = user
      })
    },
    methods: {
      signOut () {
        firebase.auth().signOut()
        this.$router.push('/signin')
      }
    }
  }
</script>


