<template>
  <practice-1/>
  <hr/>
  <practice-2/>
  <hr/>
  <practice-3/>
  <hr/>
  <practice-4/>
  <hr/>
  <practice-5/>
  <hr/>
  <practice-6/>
  <hr/>
  <practice-7/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Practice1 from './Practice1.vue'
import Practice2 from './Practice2.vue'
import Practice3 from './Practice3.vue'
import Practice4 from './Practice4.vue'
import Practice5 from './Practice5.vue'
import Practice6 from './Practice6.vue'
import Practice7 from './Practice7.vue'

export default defineComponent({
  components: {
    Practice1,
    Practice2,
    Practice3,
    Practice4,
    Practice5,
    Practice6,
    Practice7,
  },
})
</script>
