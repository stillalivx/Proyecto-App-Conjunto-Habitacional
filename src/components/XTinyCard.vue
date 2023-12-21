<script setup lang="ts">
interface Props {
  title: string
  icon: string
  value: string
  date: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-white p-2.5 rounded-lg shadow-xs">
    <div class="flex items-center text-gray-800 mb-2.5">
      <i class="mr-1.5" :class="[icon]"></i>
      <span class="font-medium">
        {{ title }}
      </span>
    </div>
    <div class="text-5xl mb-2.5">
      {{ value }}
    </div>
  </div>
</template>

<style scoped>

</style>