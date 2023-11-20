<script setup lang="ts">
import { ref } from 'vue'

import XFloatView from '../../../components/XFloatView.vue'
import XInputText from '../../../components/XInputText.vue'
import XInputButton from '../../../components/XInputButton.vue'

const label = ref('')
const residents = ref('')

const pumpPin = ref('')

const potPin = ref('')
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
            v-model="potPin"
            placeholder="Pin"
        ></XInputText>
      </fieldset>
      <div class="flex justify-center">
        <XInputButton
            color-class="bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700"
            text="Agregar"
        ></XInputButton>
      </div>
    </form>
  </XFloatView>
</template>

<style scoped>

</style>