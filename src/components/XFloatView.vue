<script setup lang="ts">
import { useCommonStore } from '../stores/common.store.ts'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
const commonStore = useCommonStore()

function closeFloatView() {
  router.push({ name: 'Dashboard' })
  commonStore.visibleView = false
}

onMounted(() => {
  commonStore.visibleView = true
})
</script>

<template>
  <div class="fixed z-50 w-full h-full top-0 left-0">
    <Transition
        name="float-view"
        enter-active-class="animate__animated animate__faster animate__slideInRight"
        leave-active-class="animate__animated animate__faster animate__slideOutRight"
    >
      <div
          v-if="commonStore.visibleView"
          class="absolute top-0 right-0 w-full lg:w-[30rem] h-full bg-slate-100 z-50 shadow-md p-5 overflow-auto"
      >
        <div class="pb-1">
          <i
              class="bx bx-x text-3xl cursor-pointer hover:text-gray-500 text-gray-600 active:text-gray-800"
              @click="closeFloatView"
          ></i>
        </div>
        <slot></slot>
      </div>
    </Transition>
    <Transition
        name="bg-float-view"
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
    >
      <div
          v-if="commonStore.visibleView"
          class="fixed z-40 h-full w-full bg-black/70 top-0 left-0"
      ></div>
    </Transition>
  </div>
</template>

<style scoped>

</style>