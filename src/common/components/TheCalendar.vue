<script setup>
import { toRef } from 'vue'
import useCalendar from '../helpers/use/calendar'

const props = defineProps({
  day: {
    type: Number,
    default: 0
  },
  year: {
    type: Number,
    default: 0
  },
  month: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: new Date()
  }
})

const selectedDay = toRef(props, 'day')
const selectedYear = toRef(props, 'year')
const selectedMonth = toRef(props, 'month')
const selectedDate = toRef(props, 'date')

const emit = defineEmits(['update:selectDate'])

const { calendar } = useCalendar(selectedYear, selectedMonth, selectedDay)

const calcDateCellClass = (value) => [
  'pa-4 date-elem elevation-4 cursor-pointer transition-fast-in-fast-out',
  { 'text-disabled elevation-1': !value.isCurMonth },
  value.date.getTime() === selectedDate.value?.getTime() &&
    (value.isCurMonth ? 'bg-purple-darken-3' : 'bg-purple-lighten-5')
]
</script>

<template>
  <div
    class="d-flex align-center w-100 justify-space-between pb-2 mt-4"
    v-for="(row, i) in calendar"
    :key="i"
  >
    <span
      v-for="dayElem in row"
      :key="dayElem.key"
      :class="calcDateCellClass(dayElem)"
      @click="emit('update:selectDate', dayElem.date)"
      >{{ dayElem.day }}</span
    >
  </div>
</template>

<style scoped lang="scss">
.date-elem {
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
}
</style>
