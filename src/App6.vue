<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
}
</script>
