<template>
  <span v-bind:title="message">
    Hover your mouse over me for a few seconds to see my dynamically bound
    title!
  </span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: `You loaded this page on ${new Date()}`,
    }
  },
})
</script>
