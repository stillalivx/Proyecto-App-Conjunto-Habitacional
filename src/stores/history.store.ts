import { defineStore } from 'pinia'
import { ref } from 'vue'

import IRegister from '../interfaces/register.interface'

export const useHistoryStore = defineStore('history', () => {
    const registers = ref<IRegister[]>([])

    return { registers }
})