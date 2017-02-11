<template>
  <div class="ui modal">
    <div class="ui header">Photo</div>
    <div class="content">
      Test
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      open () {
        $(this.$el)
        .modal({
          closable: false
        })
        .modal('show')
      },
      close () {
        $(this.$el).modal('hide')
      }
    }
  }
</script>