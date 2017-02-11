<template>
  <div class="ui center aligned grid">
    <div class="row">
      <img :src="profile.photoURL" alt="" class="ui circular image a-medium">
    </div>
    <div class="row"><h2>@{{ profile.email }}</h2></div>
    <div class="row"><h2>{{ profile.name }}</h2></div>
    <div v-if="profile.description" class="row"><h2>{{ profile.description }}</h2></div>
  </div>
  
</template>

<script>
  export default {
    props: ['profile']
  }
</script>