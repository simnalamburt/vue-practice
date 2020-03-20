<template>
  <p v-if="seen">Now you see me</p>
  <p v-else>Waiting...</p>
</template>

<script lang="ts">
export default {
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
}
</script>
