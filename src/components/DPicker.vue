<script setup>
import { ref } from 'vue'
import HeaderDates from './HeaderDates.vue'
import HeaderSelects from './HeaderSelects.vue'
import HeaderWeekdays from './HeaderWeekdays.vue'
import BottomCalendar from './BottomCalendar.vue'
import { curDay, curMonth, curYear, curWeekday } from '../consts/index'

const selectedDay = ref(curDay)
const selectedYear = ref(curYear)
const selectedMonth = ref(curMonth)

const selectedDayShown = ref(curDay)
const selectedYearShown = ref(curYear)
const selectedMonthShown = ref(curMonth)
const selectedWeekdayShown = ref(curWeekday)

const selectedDate = ref(null)

const handleSelectDate = (value) => {
  selectedDate.value = value
  selectedDayShown.value = value.getDate()
  selectedYearShown.value = value.getFullYear()
  selectedMonthShown.value = value.getMonth()
  selectedWeekdayShown.value = value.getDay()
}
</script>

<template>
  <v-container>
    <v-layout>
      <div sm6 class="w-100">
        <v-card class="pa-4 w-50" style="min-width: 400px">
          <div class="d-flex align-center">
            <header-dates
              :selectedDayShown="selectedDayShown"
              :selectedMonthShown="selectedMonthShown"
              :selectedYearShown="selectedYearShown"
              :selectedWeekdayShown="selectedWeekdayShown"
            />
            <header-selects
              :selectedYear="selectedYear"
              :selectedMonth="selectedMonth"
              @update:selectedYear="(newValue) => (selectedYear = newValue)"
              @update:selectedMonth="(newValue) => (selectedMonth = newValue)"
            />
          </div>
          <header-weekdays />
          <v-divider></v-divider>
          <bottom-calendar
            :date="selectedDate"
            :day="selectedDay"
            :year="selectedYear"
            :month="selectedMonth"
            @update:selectDate="(newValue) => handleSelectDate(newValue)"
          />
        </v-card>
      </div>
    </v-layout>
  </v-container>
</template>
