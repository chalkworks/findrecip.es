<template>
  <!-- <div class="ui segment">
    <h2 class="ui header">Sign In</h2>
    <div @click="signIn" class="ui google plus button"><i class="google plus icon"></i> Sign In With Google+</div>
  </div> -->

  <div class="ui middle aligned center aligned grid signInSection">
    <div class="column">
      <h2 class="ui image header">
        <div class="content">
          Log-in to your account
        </div>
      </h2>

      <div class="ui message">
       Sign Up or Login
        <div class="ui small buttons">
          <div @click="signIn('google')" class="ui google plus button"><i class="google plus icon"></i>Google Plus</div>
          <div class="or"></div>
          <div @click="signIn('facebook')" class="ui facebook button"><i class="facebook icon"></i>Facebook</div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import { User } from '../services'

  export default {
    beforeRouteEnter (to, from, next) {
      const cancel = firebase.auth().onAuthStateChanged((user) => {
        cancel()
        if (user) {
          next(to.query.redirect || '/')
          return
        }
        next()
      })
    },
    methods: {
      signIn (type) {
        switch (type) {
          case 'google':
            firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((result) => {
              User.createByGooglePlus(result.user)
                .then(() => {
                  this.$router.push('/profile')
                })
            })
            break
          case 'facebook':
            firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then((result) => {
              User.createByFacebook(result.user)
                .then(() => {
                  this.$router.push('/profile')
                })
            })
            break
        }
      }
    }
  }
</script>

<style scoped="">


  .image {
    margin-top: -100px;
  }
  .column {
    max-width: 450px;
  }

</style>
