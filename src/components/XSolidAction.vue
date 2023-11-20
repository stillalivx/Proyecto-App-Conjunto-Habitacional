<script setup lang="ts">
import { color } from 'chart.js/helpers'

interface Prop {
  icon: string
  colorClass: string
  title: string
}

defineProps<Prop>()
</script>

<template>
  <button
      class="rounded-full w-9 h-9 flex justify-center items-center shadow-md active:shadow-none"
      :class="colorClass"
      :title="title"
  >
    <i
        class="text-2xl text-slate-800"
        :class="[icon]"
    ></i>
  </button>
</template>

<style scoped>

</style>