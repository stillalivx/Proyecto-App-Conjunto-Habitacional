<script setup lang="ts">

import XTextButton from '../../../components/XTextButton.vue'
import DChart from './DChart.vue'

const viewOptions = [
  { label: 'Hoy', status: false },
  { label: 'Semanal', status: false },
  { label: 'Mensual', status: true },
  { label: 'Anual', status: false }
]
</script>

<template>
  <div class="rounded-md bg-white shadow-sm p-4 h-full grid grid-rows-[auto_1fr]">
    <div class="flex items-center space-x-4">
      <XTextButton
          v-for="option in viewOptions"
          :text="option.label"
          :active="option.status"
      ></XTextButton>
    </div>
    <div class="relative">
      <DChart></DChart>
    </div>
  </div>
</template>

<style scoped>

</style>