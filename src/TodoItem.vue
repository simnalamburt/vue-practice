<template>
  <li>{{ todo.text }}</li>
</template>

<script lang="ts">
export default {
  props: ['todo'],
}
</script>
