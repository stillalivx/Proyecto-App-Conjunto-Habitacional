<script setup lang="ts">
import XSolidButton from '../../../components/XSolidButton.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <header class="flex justify-between my-6">
    <h1 class="text-3xl text-slate-900 font-semibold">
      Dashboard
    </h1>
    <XSolidButton
        color-class="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700"
        icon="bx bx-plus"
        text="Nuevo edificio"
        @click="router.push({ name: 'New-Item' })"
    ></XSolidButton>
  </header>
</template>

<style scoped>

</style>