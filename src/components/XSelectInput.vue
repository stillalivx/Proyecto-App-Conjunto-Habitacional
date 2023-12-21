<script setup lang="ts">
interface Props {
  options: {
    value: string
    label: string
  }[],
  modelValue: string
}

defineProps<Props>()
</script>

<template>
  <select
      class="w-64 h-9 px-1 rounded-lg text-slate-700 outline-0 cursor-pointer text-sm"
      @input="$emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
  >
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >{{ option.label }}</option>
  </select>
</template>

<style scoped>

</style>