import Vue from 'vue'
import App1 from './App1.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'
import App4 from './App4.vue'
import App5 from './App5.vue'
import App6 from './App6.vue'
import App7 from './App7.vue'

new Vue({ el: '#app-1', render: e => e(App1) })
new Vue({ el: '#app-2', render: e => e(App2) })
new Vue({ el: '#app-3', render: e => e(App3) })
new Vue({ el: '#app-4', render: e => e(App4) })
new Vue({ el: '#app-5', render: e => e(App5) })
new Vue({ el: '#app-6', render: e => e(App6) })
new Vue({ el: '#app-7', render: e => e(App7) })
