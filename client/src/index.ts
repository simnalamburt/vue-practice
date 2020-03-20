import Vue from 'vue'

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
setTimeout(_ => {
  app.message += 'ㅇㅅㅇ~'
}, 1000)



new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})



const app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
})
setTimeout(_ => {
  app3.seen = true
}, 500)



new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})



new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})



new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})



// Define a new component called todo-item
Vue.component('todo-item', {
  props: ['todo']
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
