<script setup lang="ts">
import DHeader from '../components/DHeader.vue'
import DActions from '../components/DActions.vue'
import DStatistics from '../components/DStatistics.vue'
import { useHistoryStore } from '../../../stores/history.store.ts'
import { computed } from 'vue'

const historyStore = useHistoryStore();

const isDataAvailable = computed(() => historyStore.config.buildings.length > 0);
</script>

<template>
  <div class="container m-auto">
    <DHeader></DHeader>
    <hr class="border-slate-300">
    <span v-if="isDataAvailable">
      <DActions></DActions>
      <DStatistics></DStatistics>
    </span>
    <div v-else class="text-center text-gray-600 mt-9">
      Registra un nuevo edificio para visualizar su información
    </div>
  </div>
  <RouterView v-slot="{ Component }">
    <Transition :duration="500">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>

</style>