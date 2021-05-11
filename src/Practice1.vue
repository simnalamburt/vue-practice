<template>
  <span>{{ message }}</span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Vue!',
    }
  },

  mounted() {
    setTimeout((_) => {
      this.message += 'ㅇㅅㅇ~'
    }, 1000)
  },
})
</script>
