<script setup lang="ts">
import { computed, ref } from 'vue'

import XFloatView from '../../../components/XFloatView.vue'
import XInputText from '../../../components/XInputText.vue'
import XInputButton from '../../../components/XInputButton.vue'
import { useHistoryStore } from '../../../stores/history.store.ts'
import { socket } from '../../../socket.ts'
import { useRouter } from 'vue-router'
import { useCommonStore } from '../../../stores/common.store.ts'

const router = useRouter()
const commonStore = useCommonStore()
const historyStore = useHistoryStore()

const building = computed(() => {
  return historyStore.config.buildings.find(b => b.id === parseInt(historyStore.viewOf))
})

const error = ref('')

const label = ref(building.value?.alias?.toString() || '')
const residents = ref(building.value?.residents.toString() || '')
const pumpPin = ref(building.value?.pins.pump.toString() || '')
const sensorPin = ref(building.value?.pins.sensor.toString() || '')

function updateBuilding() {
  if (!label.value) {
    error.value = 'Es necesario darle una etiqueta al edificio.'
    return
  }

  if (!residents.value || isNaN(parseInt(residents.value))) {
    error.value = 'Es necesario especificar el número de habitantes en el edificio.'
    return
  }

  if (!pumpPin.value || isNaN(parseInt(pumpPin.value))) {
    error.value = 'Es necesario asignar un pin para el control de la bomba de agua.'
    return
  }

  if (!sensorPin.value || isNaN(parseInt(sensorPin.value))) {
    error.value = 'Es necesario asignar un pin para el control del sensor del tinaco.'
    return
  }

  const data = {
    id: building.value?.id,
    alias: label.value,
    residents: parseInt(residents.value),
    pins: {
      pump: parseInt(pumpPin.value),
      sensor: parseInt(sensorPin.value)
    }
  }

  socket.emit('update-building', data)

  router.back()
  commonStore.visibleView = false
}
</script>

<template>
  <XFloatView>
    <h1 class="text-center text-xl font-semibold text-slate-900 mb-4">
      Editar edificio
    </h1>
    <form>
      <fieldset class="border border-solid border-slate-300 p-3">
        <legend class="text-xs text-slate-500">Edificio</legend>
        <span class="space-y-4">
          <XInputText
              label="Etiqueta"
              name="tag"
              v-model="label"
              placeholder="Etiqueta"
          ></XInputText>
          <XInputText
              label="Habitantes"
              name="residents"
              v-model="residents"
              placeholder="Habitantes"
          ></XInputText>
        </span>
      </fieldset>
      <fieldset class="border my-5 border-solid border-gray-300 p-3">
        <legend class="text-xs text-slate-500">Bomba</legend>
        <XInputText
            label="Pin"
            name="pumpPin"
            v-model="pumpPin"
            placeholder="Pin"
        ></XInputText>
      </fieldset>
      <fieldset class="border my-5 border-solid border-gray-300 p-3">
        <legend class="text-xs text-slate-500">Tinaco</legend>
        <XInputText
            label="Pin"
            name="potPin"
            v-model="sensorPin"
            placeholder="Pin"
        ></XInputText>
      </fieldset>
      <div class="text-red-400 text-center text-xs mb-5" v-if="error.trim()">
        {{ error }}
      </div>
      <div class="flex justify-center">
        <XInputButton
            @click.prevent="updateBuilding"
            color-class="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700"
            text="Guardar"
        ></XInputButton>
      </div>
    </form>
  </XFloatView>
</template>

<style scoped>

</style>