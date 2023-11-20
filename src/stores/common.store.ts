import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCommonStore = defineStore('common', () => {
    const visibleView = ref(false)

    return { visibleView }
})