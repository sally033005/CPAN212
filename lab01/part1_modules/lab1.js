const _ = require("lodash");

const holidays = [
    {name: "Christmas", date: new Date("2024-12-25")},
    {name: "Canada Day", date: new Date("2025-07-01")},
    {name: "New Year", date: new Date("2025-01-01")}
]

const today = new Date();

holidays.forEach(holiday =>{
    console.log(holiday)
    console.log((holiday.date - today)/(1000*60*60*24))
})

const randomHoliday = _.sample(holidays);
console.log(randomHoliday)

const indexChristmas = _.findIndex(holidays, {name: "Christmas"});
console.log(indexChristmas)

const indexCanadaDay = _.findIndex(holidays, {name: "Canada Day"});
console.log(indexCanadaDay)