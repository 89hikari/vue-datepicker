import { ref, watch } from 'vue'
export default function useCalendar(selectedYear, selectedMonth, selectedDay) {
  const calendar = ref([])
  const redrawCalendar = (year, month, day) => {
    calendar.value = []
    const currentDate = new Date(year, month, day)
    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

    for (let day = 1, row = 0; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const weekday = date.getDay()
      const result = {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        weekday: weekday,
        isCurMonth: true,
        date: date
      }
      result.key = `${result.day}${result.month}`
      try {
        calendar.value[row].push(result)
      } catch (_) {
        calendar.value.push([])
        calendar.value[row].push(result)
      }
      if (weekday === 0) row++
    }

    const prevMonthDate = currentDate
    prevMonthDate.setDate(1)
    prevMonthDate.setHours(-1)

    while (calendar.value[0].length !== 7) {
      const result = {
        day: prevMonthDate.getDate(),
        month: prevMonthDate.getMonth(),
        year: prevMonthDate.getFullYear(),
        weekday: prevMonthDate.getDay(),
        isCurMonth: false
      }

      result.key = `${result.day}${result.month}`
      result.date = new Date(result.year, result.month, result.day)

      calendar.value[0].unshift(result)
      prevMonthDate.setHours(-24)
    }

    const lastDate = calendar.value.at(-1).at(-1).date

    const nextMonthDate =
      lastDate.getMonth() === 11
        ? new Date(lastDate.getFullYear() + 1, 0, 1)
        : new Date(lastDate.getFullYear(), lastDate.getMonth() + 1, 1)

    while (calendar.value.at(-1).length !== 7) {
      const result = {
        day: nextMonthDate.getDate(),
        month: nextMonthDate.getMonth(),
        year: nextMonthDate.getFullYear(),
        weekday: nextMonthDate.getDay(),
        isCurMonth: false
      }

      result.key = `${result.day}${result.month}`
      result.date = new Date(result.year, result.month, result.day)

      calendar.value.at(-1).push(result)
      nextMonthDate.setHours(24)
    }
  }

  watch([selectedYear, selectedMonth, selectedDay], (currentValue) =>
    redrawCalendar(...currentValue)
  )

  redrawCalendar(selectedYear.value, selectedMonth.value, selectedDay.value)

  return { calendar }
}
