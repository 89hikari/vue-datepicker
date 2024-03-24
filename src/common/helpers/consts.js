export const curDate = new Date()
export const years = Array.from(Array(10).keys()).map((_, i) => new Date().getFullYear() + 1 - i)
export const weekdays = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
]
export const months = [
  {
    title: 'Январь',
    titleSecondary: 'января',
    value: 0
  },
  {
    title: 'Февраль',
    titleSecondary: 'февраля',
    value: 1
  },
  {
    title: 'Март',
    titleSecondary: 'марта',
    value: 2
  },
  {
    title: 'Апрель',
    titleSecondary: 'апреля',
    value: 3
  },
  {
    title: 'Май',
    titleSecondary: 'мая',
    value: 4
  },
  {
    title: 'Июнь',
    titleSecondary: 'июня',
    value: 5
  },
  {
    title: 'Июль',
    titleSecondary: 'июля',
    value: 6
  },
  {
    title: 'Август',
    titleSecondary: 'августа',
    value: 7
  },
  {
    title: 'Сентябрь',
    titleSecondary: 'сентября',
    value: 8
  },
  {
    title: 'Октябрь',
    titleSecondary: 'октября',
    value: 9
  },
  {
    title: 'Ноябрь',
    titleSecondary: 'ноября',
    value: 10
  },
  {
    title: 'Декабрь',
    titleSecondary: 'декабря',
    value: 11
  }
]

export const curDay = curDate.getDate()
export const curMonth = curDate.getMonth()
export const curYear = curDate.getFullYear()
export const curWeekday = curDate.getDay()
