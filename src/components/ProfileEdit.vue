<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <profile-form @save="save" v-model="profile" @cancel="back"></profile-form>
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm'
  import { Me } from '../services'

  export default {
    components: {
      ProfileForm
    },
    data: () => ({
      profile: {
        name: '',
        email: '',
        description: '',
        phptoURL: ''
      }
    }),
    created () {
      Me.get()
      .then((data) => {
        this.profile = data
      })
    },
    methods: {
      save () {
        Me.set(this.profile)
        .then(() => {
          this.back()
        })
      },
      back () {
        this.$router.push('/profile')
      }
    }
  }
</script>