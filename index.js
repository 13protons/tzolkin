/*

`includedDate` is any valid argument for the native `Date.parse()` function, or a **step** constant.

`step` can be any of tz.YEAR, tz.MONTH, or tz.DAY. Other valid step values include a `LAST` or `NEXT` prefix, such as tz.LAST_YEAR, tz.NEXT_MONTH etc. It's possible to use a step value in place of includedDate (i.e. `tz.month(tz.NEXT_MONTH)`) in order to get alternate timeframes that do not affect the internal pointer. 

tz.circa([includedDate])
=> tz object with internal pointer set to include includedDate. New Tzolkin objects deault to `.circa(Date.now())`.

tz.year([includedDate])
=> Array of Tzolkin dates representing the current year. If passed, result will contain `includedDate`. Passing `incluedDate` does not move internal pointer. 

tz.month([includedDate])
=> Array of Tzolkin dates representing the current month. If passed, result will contain `includedDate`. Passing `incluedDate` does not move internal pointer. 

tz.day([includedDate]);
=> A Tzolkin date representing today. If passed, result will represent `includedDate`. Passing `incluedDate` does not move internal pointer. 

tz.next([step]);
=> tz object. Advance internal pointer by `step`. If argument is omitted, defualts to tz.MONTH.

tz.prev([step]);
=> tz object. step back internal pointer by `step`. If argument is omitted, defualts to tz.MONTH.

*/