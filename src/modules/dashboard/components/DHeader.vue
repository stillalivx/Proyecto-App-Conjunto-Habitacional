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
    <div class="space-x-4 flex">
      <XSolidButton
          color-class="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700"
          icon="bx bx-cog"
          text="Configurar IA"
          @click="router.push({ name: 'Conf-IA' })"
      ></XSolidButton>
      <XSolidButton
          color-class="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700"
          icon="bx bx-plus"
          text="Nuevo edificio"
          @click="router.push({ name: 'New-Item' })"
      ></XSolidButton>
    </div>
  </header>
</template>

<style scoped>

</style>