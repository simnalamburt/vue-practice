<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Vue.js!',
    }
  },

  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    },
  },
})
</script>
