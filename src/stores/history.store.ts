import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import IRegister from '../interfaces/register.interface'

import { ViewHistoryOptions } from '../types.ts'
import { IConfig } from '../interfaces/config.interface.ts'

export const useHistoryStore = defineStore('history', () => {
    const viewAs = ref(ViewHistoryOptions.TODAY);
    const viewOf = ref('')

    const registers = ref<IRegister[]>([])
    const config = ref<IConfig>({ buildings: [] })

    const statisticsWaterLevel = computed(() => {
        const todayDate = new Date()
        const tankId = parseInt(viewOf.value)

        switch (viewAs.value) {
            case ViewHistoryOptions.TODAY:
                return registers.value
                    .filter(r => {
                        const rDate = new Date(r.date)

                        return todayDate.getDate() === rDate.getDate() &&
                            todayDate.getMonth() === rDate.getMonth() &&
                            todayDate.getFullYear() === rDate.getFullYear() &&
                            tankId === r.waterTank
                    })
                    .map(r => r.level)

            default:
                return []
        }
    })

    return { registers, statisticsWaterLevel, viewAs, config, viewOf }
})