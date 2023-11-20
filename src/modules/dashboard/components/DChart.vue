<script setup lang="ts">
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, PointElement, Title, Tooltip, Legend, CategoryScale, LinearScale, LineElement } from 'chart.js'

ChartJS.register(Title, PointElement, Tooltip, Legend, CategoryScale, LinearScale, LineElement)

const labels = ref([
    '00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'
])

const datasets = ref([
  {
    data: [3, 1, 2, 4, 4, 3, 2, 0],
    label: 'Edificio 1'
  }
])

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

const chartData = ref({
  labels,
  datasets
})

</script>

<template>
  <Line
      :options="options"
      :data="chartData"
  ></Line>
</template>

<style scoped>

</style>