<script setup lang="ts">
interface Props {
  text: string
  colorClass: string
}

defineProps<Props>()
</script>

<template>
  <button class="w-48 text-sm py-2 rounded-md text-slate-100 shadow-md" :class="[colorClass]">
    {{ text }}
  </button>
</template>

<style scoped>

</style>