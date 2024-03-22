<script setup>
import { weekdays, months } from '../consts/index'
defineProps({
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
</script>

<template>
  <div class="d-flex align-center w-50">
    <font-awesome-icon icon="calendar" class="fa-lg mr-3" />
    <div>
      <p class="font-weight-bold">
        {{ selectedDayShown }}
        {{ months.find((el) => el.value === selectedMonthShown).titleSecondary }}
        {{ selectedYearShown }}
      </p>
      <p class="caption text-medium-emphasis">{{ weekdays[selectedWeekdayShown] }}</p>
    </div>
  </div>
</template>

<style></style>
