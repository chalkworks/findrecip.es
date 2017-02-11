<template>
  <div class="ui segment">
    <profile-detail v-if="profile" :profile=profile></profile-detail>
  </div>
</template>

<script>
  import ProfileDetail from './ProfileDetail'
  import { User } from '../services'

  export default {
    components: {
      ProfileDetail
    },
    data: () => ({
      profile: null
    }),
    created () {
      this.reload()
    },
    watch: {
      $route: 'reload'
    },
    methods: {
      reload () {
        User.subscribe(this.$route.params.id, (data) => {
          this.profile = data
        })
      }
    }
  }
</script>