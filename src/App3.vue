<template>
  <p v-if="seen">Now you see me</p>
  <p v-else>Waiting...</p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      seen: false,
    }
  }

  mounted () {
    setTimeout(_ => {
      this.seen = true
    }, 500)
  }
})
</script>
