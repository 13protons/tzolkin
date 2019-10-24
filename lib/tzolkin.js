function Tzolkin(options) {
  // combine options w/ defaults
  // get default circa

  const params = Object.assign({
    lang: {
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
      ],
      today: 'Today'
    },
    min: -Infinity,
    max: Infinity,
    inRange: function () { return true; },
    dayOffset: 1,
    padWeeks: true,
    circa: Date.now()
  }, options || {});

  const tz = {
    DAY: 'DAY',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
    LAST_DAY: 'LAST_DAY',
    LAST_MONTH: 'LAST_MONTH',
    LAST_YEAR: 'LAST_YEAR',
    circa,
    day,
    month, 
    year,
    next,
    prev
  }

  
}

export default Tzolkin;