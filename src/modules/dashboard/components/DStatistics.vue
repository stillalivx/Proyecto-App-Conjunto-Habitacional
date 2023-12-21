<script setup lang="ts">
import { computed } from 'vue'
import { dayjs } from '../../../dayjs'

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
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] space-x-5">
    <div class="space-y-5">
      <XTinyCard
          title="Habitantes"
          :date="dayjs().format()"
          icon="bx bx-group"
          :value="residents"
      ></XTinyCard>
      <XTinyCard
          title="Nivel de tinaco"
          :date="dayjs().format()"
          icon="bx bx-water"
          value="2"
      ></XTinyCard>
      <XTinyCard
          title="Estado de la bomba"
          :date="dayjs().format()"
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