<script setup>
import { computed } from 'vue'
import { weekdays, months } from '../helpers/consts'

const props = defineProps({
  selectedDayShown: {
    type: Number,
    default: 0
  },
  selectedMonthShown: {
    type: Number,
    default: 0
  },
  selectedYearShown: {
    type: Number,
    default: 0
  },
  selectedWeekdayShown: {
    type: Number,
    default: 0
  }
})

const titleSecondary = computed(
  () => months.find((el) => el.value === props.selectedMonthShown).titleSecondary
)
</script>

<template>
  <div class="d-flex align-center w-50">
    <v-icon icon="mdi-calendar" class="fa-lg mr-6" />
    <div>
      <p class="font-weight-bold">
        {{ selectedDayShown }}
        {{ titleSecondary }}
        {{ selectedYearShown }}
      </p>
      <p class="caption text-medium-emphasis">{{ weekdays[selectedWeekdayShown] }}</p>
    </div>
  </div>
</template>

<style></style>
