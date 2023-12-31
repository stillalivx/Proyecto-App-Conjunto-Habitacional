<script setup lang="ts">

import XTextButton from '../../../components/XTextButton.vue'
import DChart from './DChart.vue'
import { useHistoryStore } from '../../../stores/history.store.ts'
import { ViewHistoryOptions } from '../../../types.ts'

const historyStore = useHistoryStore()

const viewOptions = [
  { label: 'Hoy', value: ViewHistoryOptions.TODAY },
  { label: 'Semanal', value: ViewHistoryOptions.WEEKLY },
  { label: 'Mensual', value: ViewHistoryOptions.MONTHLY },
  { label: 'Anual', value: ViewHistoryOptions.YEARLY }
]

function setViewValue(val: ViewHistoryOptions) {
  historyStore.viewAs = val;
}
</script>

<template>
  <div class="rounded-md bg-white shadow-sm p-4 h-full grid grid-rows-[auto_1fr]">
    <div class="flex items-center space-x-4">
      <XTextButton
          v-for="option in viewOptions"
          :text="option.label"
          :active="option.value === historyStore.viewAs"
          @click="setViewValue(option.value)"
      ></XTextButton>
    </div>
    <div class="relative">
      <DChart></DChart>
    </div>
  </div>
</template>

<style scoped>

</style>