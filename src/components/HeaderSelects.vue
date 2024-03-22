<script setup>
import { computed } from 'vue'
import { years, months } from '../consts/index'
const emit = defineEmits(['update:selectedYear', 'update:selectedMonth'])
const props = defineProps({
  selectedYear: {
    type: Number,
    default: 0
  },
  selectedMonth: {
    type: Number,
    default: 0
  }
})

const year = computed({
  get() {
    return props.selectedYear
  },
  set(newValue) {
    emit('update:selectedYear', newValue)
  }
})
const month = computed({
  get() {
    return props.selectedMonth
  },
  set(newValue) {
    emit('update:selectedMonth', newValue)
  }
})
</script>

<template>
  <div class="d-flex align-center w-50 gc-5">
    <v-select :items="years" label="Выберите год" class="mt-5" v-model="year"></v-select>
    <v-select :items="months" label="Выберите месяц" class="mt-5" v-model="month"></v-select>
  </div>
</template>

<style scoped></style>
