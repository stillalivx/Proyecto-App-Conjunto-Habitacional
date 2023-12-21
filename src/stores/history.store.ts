import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import IRegister from '../interfaces/register.interface'

import { ViewHistoryOptions } from '../types.ts'
import { IConfig } from '../interfaces/config.interface.ts'

export const useHistoryStore = defineStore('history', () => {
    const viewAs: ViewHistoryOptions = ViewHistoryOptions.TODAY;
    const viewOf = ref('')

    const registers = ref<IRegister[]>([])
    const config = ref<IConfig>({ buildings: [] })

    const filterRegisters = computed(() => {

    })

    return { registers, filterRegisters, viewAs, config, viewOf }
})