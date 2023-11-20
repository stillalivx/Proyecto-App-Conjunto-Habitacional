import { io } from 'socket.io-client'
import { reactive } from 'vue'

export const socketState = reactive({
    connected: false
})

const URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3456'

export const socket = io(URL)

socket.on('connect', () => {
    socketState.connected = true
})

socket.on('disconnect', () => {
    socketState.connected = false
})