<script setup lang="ts">
import { computed } from 'vue'

import { useHistoryStore } from '../../../stores/history.store.ts'

import XTinyCard from '../../../components/XTinyCard.vue'
import DUseChart from './DUseChart.vue'

const historyStore = useHistoryStore()

const residents = computed(() => {
  const building = historyStore.config.buildings.find(b => b.id === parseInt(historyStore.viewOf))

  if (!building) {
    return ''
  }

  return building.residents.toString()
})

const tankLevel = computed(() => {
  const tankId = parseInt(historyStore.viewOf)

  for (let i = historyStore.registers.length - 1; i >= 0; i--) {
    const register = historyStore.registers[i];

    if (register.waterTank === tankId) {
      return register.level
    }
  }

  return 0
})
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] space-x-5">
    <div class="space-y-5">
      <XTinyCard
          title="Habitantes"
          icon="bx bx-group"
          :value="residents"
      ></XTinyCard>
      <XTinyCard
          title="Nivel de tinaco"
          icon="bx bx-water"
          :value="tankLevel.toString()"
      ></XTinyCard>
      <XTinyCard
          title="Estado de la bomba"
          icon="bx bx-power-off"
          value="Off"
      ></XTinyCard>
    </div>
    <div>
        <DUseChart></DUseChart>
    </div>
  </div>
</template>

<style scoped>
</style>