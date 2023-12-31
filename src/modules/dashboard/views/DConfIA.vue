<script setup lang="ts">
import { ref } from 'vue'
import XFloatView from '../../../components/XFloatView.vue'
import XInputText from '../../../components/XInputText.vue'
import XInputButton from '../../../components/XInputButton.vue'
import XInputTime from '../../../components/XInputTime.vue'

const trainingWeeks = ref('')
const fillTime = ref('')
const extraPercent = ref('')
const error = ref('')

function setConf() {
  error.value = ''

  if (!trainingWeeks.value) {
    error.value = 'Es necesario especificar las semanas de entrenamiento para la IA.'
    return
  }

  if (!fillTime.value) {
    error.value = 'Es necesario especificar la hora de llenado.'
    return
  }

  if (!extraPercent.value) {
    error.value = 'Es necesario especificar un porcentaje extra de agua para el llenado.'
    return
  }
}
</script>

<template>
  <XFloatView>
    <h1 class="text-center text-xl font-semibold text-slate-900 mb-4">
      Configuración de la IA
    </h1>
    <form>
      <span class="space-y-4">
        <XInputText
            label="Semanas de entrenamiento"
            name="trainingWeeks"
            v-model.trim="trainingWeeks"
            placeholder="Semanas"
        ></XInputText>
        <XInputTime
            label="Hora de llenado"
            name="fillTime"
            v-model.trim="fillTime"
            placeholder="Hora de llenado"
        ></XInputTime>
        <XInputText
            label="Porcentaje extra de agua"
            name="extraPercent"
            v-model.trim="extraPercent"
            placeholder="Porcentaje extra"
        ></XInputText>
      </span>
      <div class="text-red-400 text-center text-xs mb-5 mt-5" v-if="error.trim()">
        {{ error }}
      </div>
      <div class="flex justify-center mt-5">
        <XInputButton
            color-class="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700"
            text="Guardar"
            @click.prevent="setConf"
        ></XInputButton>
      </div>
    </form>
  </XFloatView>
</template>