<template>
  <span>{{ message }}</span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      message: 'Hello Vue!',
    }
  }

  mounted () {
    setTimeout(_ => {
      this.message += 'ㅇㅅㅇ~'
    }, 1000)
  }
})
</script>
