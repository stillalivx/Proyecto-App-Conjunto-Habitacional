<script setup lang="ts">
import { computed, ref } from 'vue'
import { Line } from 'vue-chartjs'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { useHistoryStore } from '../../../stores/history.store.ts'
import { ViewHistoryOptions } from '../../../types.ts'

ChartJS.register(Title, PointElement, Tooltip, Legend, CategoryScale, LinearScale, LineElement)

const historyStore = useHistoryStore()

const data = computed(() => {
  const buildingIdx = historyStore.config.buildings.findIndex(b => b.id.toString() === historyStore.viewOf)

  let labels: string[] = [];

  switch (historyStore.viewAs) {
    case ViewHistoryOptions.TODAY:
      for (let i = 0; i < 24; i++) {
        labels.push(`${i.toString().padStart(2, '0')}:00`)
      }

      break;
  }


  return {
    labels,
    datasets: [
      {
        data: historyStore.statisticsWaterLevel,
        label: historyStore.config.buildings[buildingIdx].alias
      }
    ]
  }
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      backgroundColor: '#24197F',
    },
    line: {
      backgroundColor: '#6590FD',
      borderColor: '#6590FD'
    }
  }
})

</script>

<template>
  <Line
      :options="options"
      :data="data"
  ></Line>
</template>

<style scoped>

</style>