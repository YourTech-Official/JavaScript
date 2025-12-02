// methods
// getFullYear() : Returns the year.
// getMonth() : Returns the month.(0 - 11)
// getDate() : Returns the day of the month.(1-31)
// getHours() : Returns the hour (0-23)
// getMinutes() : Returns the minutes (0-59)
// getSeconds() : Returns the seconds (0-59).

let currentDate = new Date();

console.log(currentDate);
console.log(currentDate.getTime());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDay());
console.log(currentDate.getHours());
console.log(currentDate.getDate());