<template>
  <span>{{ message }}</span>
</template>

<script lang="ts">
export default {
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
}
</script>
