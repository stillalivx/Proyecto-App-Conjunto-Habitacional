<script setup lang="ts">
import XTinyCard from '../../../components/XTinyCard.vue'

import { dayjs } from '../../../dayjs'
import DUseChart from './DUseChart.vue'
</script>

<template>
  <div class="grid grid-cols-[auto_1fr] space-x-5">
    <div class="space-y-5">
      <XTinyCard
          title="Habitantes"
          :date="dayjs().format()"
          icon="bx bx-group"
          value="14"
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