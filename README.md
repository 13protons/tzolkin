# Tzolkin

A data model for date pickers, meant to backup UI rendering libraries that are greatly simplified compared to other solutions. 

Tzolkin can be configured by passing in a config object that is compatible with [TinyDatePicker](https://github.com/chrisdavies/tiny-date-picker/blob/HEAD/docs/tiny-date-picker.md) (minus UI specific options):

```js
const tz = Tzolkin({
  // Lang can be used to customize the text that is displayed
  // in the calendar. You can use this to display a different language.
  lang: {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    today: 'Today'
  },

  // min {string|Date} specifies the minimum date that can be selected (inclusive).
  // All earlier dates will be disabled.
  min: '10/1/2016',

  // max {string|Date} specifies the maximum date that can be selected (inclusive).
  // All later dates will be disabled.
  max: '10/1/2020',

  // inRange {Date} -> boolean takes a date and returns true or false. If false, the date
  // will be disabled in the date picker.
  inRange(dt) {
    return dt.getFullYear() % 2 > 0;
  },

  // dayOffset {number} specifies which day of the week is considered the first. By default,
  // this is 0 (Sunday). Set it to 1 for Monday, 2 for Tuesday, etc.
  dayOffset: 1
})
```