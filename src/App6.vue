<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
})
</script>
