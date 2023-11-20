<script setup lang="ts">
interface Props {
  text: string
  icon?: string
  colorClass: string
}

defineProps<Props>()
</script>

<template>
  <button
      class="flex justify-center items-center text-white px-2.5 py-1.5 rounded-lg shadow-md active:shadow-none"
      :class="[colorClass]"
  >
    <i
        v-if="icon"
        class="mr-1.5 text-lg"
        :class="[icon]"
    ></i>
    <span class="text-sm">
      {{ text }}
    </span>
  </button>
</template>

<style scoped>

</style>