<template>
  <ol>
    <!--
      Now we provide each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which will be explained later.
    -->
    <todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    >
    </todo-item>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './TodoItem.vue'

export default defineComponent({
  components: {
    TodoItem,
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' },
      ],
    }
  },
})
</script>
