<template>
  <div class="ui segment">
    <profile-detail v-if="profile" :profile="profile"></profile-detail>
    <div class="ui center aligned grid"><router-link to="/profile/edit" class="ui submit green button edit-profile">Edit</router-link></div>
    <br>
  </div>
  
</template>

<script>
  import { Me } from '../services'
  import ProfileDetail from './ProfileDetail'

  export default {
    components: {
      ProfileDetail
    },
    data: () => ({
      profile: {
        name: '',
        email: '',
        photoURL: '',
        description: ''
      }
    }),
    created () {
      Me.get()
      .then((data) => {
        this.profile = data
      })
    }
  }
</script>