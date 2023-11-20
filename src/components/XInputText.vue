<script setup lang="ts">
interface Props {
  label?: string
  name: string
  placeholder: string
  modelValue: string
}

withDefaults(defineProps<Props>(), {
  placeholder: ''
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="grid grid-rows-[auto_auto]">
    <span
        :for="name"
        v-if="!!label"
        class="mb-2 text-xs text-slate-700"
    >
      {{ label }}
    </span>
    <input
        type="text"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
        :required="true"
        class="outline-none py-2.5 px-3 text-sm shadow-sm rounded-md border border-slate-200"
    />
  </div>
</template>

<style scoped>

</style>