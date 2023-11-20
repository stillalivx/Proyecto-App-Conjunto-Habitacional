import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSweetalert2 from 'vue-sweetalert2'

import router from './router'
import { socket } from './socket'

import { useHistoryStore } from './stores/history.store.ts'

import App from './App.vue'

import './style.css'
import 'animate.css'
import 'sweetalert2/dist/sweetalert2.min.css'

import IRegister from './interfaces/register.interface.ts'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueSweetalert2)

app.mount('#app')

const historyStore = useHistoryStore()

socket.on('get-all', (data: IRegister[]) => {
    historyStore.registers.push(...data)
})

socket.on('data', (data: IRegister) => {
    historyStore.registers.push(data)
})

