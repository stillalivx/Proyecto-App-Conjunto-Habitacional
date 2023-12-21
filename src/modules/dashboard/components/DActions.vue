<script setup lang="ts">
import { computed } from 'vue'
import Swal from 'sweetalert2'

import { socket } from '../../../socket.ts'

import { useHistoryStore } from '../../../stores/history.store.ts'

import XSelectInput from '../../../components/XSelectInput.vue'
import XSolidAction from '../../../components/XSolidAction.vue'

const historyStore = useHistoryStore()

const options = computed(() =>
  historyStore.config.buildings.map(b => ({
    value: b.id.toString(),
    label: b.alias
  }))
)

async function deleteBuilding() {
  await Swal.fire({
    title: '¿Estas seguro de eliminar el edificio?',
    icon: 'warning',
    text: 'Una vez eliminados no podrás recuperar la información del edificio',
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then(({ isConfirmed }) => {
    if (isConfirmed) {
      socket.emit('delete-building', parseInt(historyStore.viewOf));
    }
  })
}
</script>

<template>
  <div class="flex justify-end my-6">
    <div class="flex items-center">
      <XSolidAction
          class="mr-5"
          color-class="bg-teal-400 hover:bg-teal-300 active:bg-teal-400"
          icon="bx bx-download"
          title="Descargar histórico en formato XLSX"
      ></XSolidAction>
      <XSolidAction
          class="mr-5"
          color-class="bg-red-400 hover:bg-red-300 active:bg-rose-400"
          icon="bx bx-trash"
          title="Eliminar"
          @click="deleteBuilding"
      ></XSolidAction>
      <XSolidAction
          class="mr-5"
          color-class="bg-amber-300 hover:bg-amber-200 active:bg-amber-400"
          icon="bx bx-edit-alt"
          title="Editar"
          @click="$router.push({ name: 'Update-Item' })"
      ></XSolidAction>
      <XSelectInput :options="options" v-model="historyStore.viewOf"></XSelectInput>
    </div>
  </div>
</template>

<style scoped>

</style>