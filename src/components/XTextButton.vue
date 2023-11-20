<script setup lang="ts">
interface Props {
  text: string
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
      class="cursor-pointer"
      :class="{
        'text-sm text-gray-500 hover:text-gray-400': !active,
        'text-lg font-semibold text-gray-900 hover:text-gray-600': active
      }"
  >
    {{ text }}
  </div>
</template>

<style scoped>

</style>