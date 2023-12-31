<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from '../../../stores/common.store.ts'

import { socket } from '../../../socket.ts'

import XFloatView from '../../../components/XFloatView.vue'
import XInputText from '../../../components/XInputText.vue'
import XInputButton from '../../../components/XInputButton.vue'

const router = useRouter()
const commonStore = useCommonStore()

const label = ref('')
const residents = ref('')
const pumpPin = ref('')
const potPin = ref('')
const error = ref('')
const potCapacity = ref('')

function addBuilding() {
  error.value = ''

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

  if (!potPin.value || isNaN(parseInt(potPin.value))) {
    error.value = 'Es necesario asignar un pin para el control del sensor del tinaco.'
    return
  }

  if (!potCapacity.value || isNaN(parseInt(potCapacity.value))) {
    error.value = 'Es necesario asignar la capacidad máxima del tanque para el buen control.'
    return
  }

  const data = {
    alias: label.value,
    residents: parseInt(residents.value),
    pins: {
      pump: parseInt(pumpPin.value),
      sensor: parseInt(potPin.value)
    }
  }

  socket.emit('new-building', data)

  router.back()
  commonStore.visibleView = false
}
</script>

<template>
  <XFloatView>
    <h1 class="text-center text-xl font-semibold text-slate-900 mb-4">
      Registrar edificio
    </h1>
    <form>
      <fieldset class="border border-solid border-slate-300 p-3">
        <legend class="text-xs text-slate-500">Edificio</legend>
        <span class="space-y-4">
          <XInputText
              label="Etiqueta"
              name="tag"
              v-model.trim="label"
              placeholder="Etiqueta"
          ></XInputText>
          <XInputText
              label="Habitantes"
              name="residents"
              v-model.trim="residents"
              placeholder="Habitantes"
          ></XInputText>
        </span>
      </fieldset>
      <fieldset class="border my-5 border-solid border-gray-300 p-3">
        <legend class="text-xs text-slate-500">Bomba</legend>
        <XInputText
            label="Pin"
            name="pumpPin"
            v-model.trim="pumpPin"
            placeholder="Pin"
        ></XInputText>
      </fieldset>
      <fieldset class="border my-5 border-solid border-gray-300 p-3">
        <legend class="text-xs text-slate-500">Tinaco</legend>
        <span class="space-y-4">
          <XInputText
              label="Pin"
              name="potPin"
              v-model.trim="potPin"
              placeholder="Pin"
          ></XInputText>
          <XInputText
              label="Capacidad máxima (lt)"
              name="potCapacity"
              v-model.trim="potCapacity"
              placeholder="Capacidad"
          ></XInputText>
        </span>
      </fieldset>
      <div class="text-red-400 text-center text-xs mb-5" v-if="error.trim()">
        {{ error }}
      </div>
      <div class="flex justify-center">
        <XInputButton
            color-class="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700"
            text="Agregar"
            @click.prevent="addBuilding"
        ></XInputButton>
      </div>
    </form>
  </XFloatView>
</template>

<style scoped>

</style>