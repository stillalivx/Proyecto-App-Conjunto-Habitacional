<script setup lang="ts">
import DHeader from '../components/DHeader.vue'
import DActions from '../components/DActions.vue'
import DStatistics from '../components/DStatistics.vue'
</script>

<template>
  <div class="container m-auto">
    <DHeader></DHeader>
    <hr class="border-slate-300">
    <DActions></DActions>
    <DStatistics></DStatistics>
  </div>
  <RouterView v-slot="{ Component }">
    <Transition :duration="500">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style scoped>

</style>