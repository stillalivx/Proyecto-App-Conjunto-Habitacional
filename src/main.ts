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
import { IBuilding, IConfig } from './interfaces/config.interface.ts'

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

socket.on('get-config', (config: IConfig) => {
    historyStore.config = config
    historyStore.viewOf = historyStore.config.buildings[0]?.id.toString() || '0'
})

socket.on('data', (data: IRegister) => {
    historyStore.registers.push(data)
})

socket.on('append-building', (data: IBuilding) => {
    const newLength = historyStore.config.buildings?.push(data)
    historyStore.viewOf = historyStore.config.buildings[newLength - 1].id.toString()
})

socket.on('delete-building-confirmation', (idDeletedBuilding: number) => {
    historyStore.config.buildings = historyStore.config.buildings
        ?.filter(b => b.id !== idDeletedBuilding)

    historyStore.viewOf = historyStore.config.buildings[0].id.toString()
})

socket.on('update-building-confirmation', (updatedBuilding: IBuilding) => {
    const buildingIndex = historyStore.config.buildings.findIndex(b => b.id === updatedBuilding.id)
    historyStore.config.buildings[buildingIndex] = updatedBuilding
})


