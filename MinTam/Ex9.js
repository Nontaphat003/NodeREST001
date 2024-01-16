// หาเวลา
// digitalClock(5025) -> "01:23:45"
// 5025 seconds converts to 1 hour, 23 minutes, 45 seconds

// digitalClock(61201) -> "17:00:01"
// 61201 seconds converts to 17 hours, 0 minutes, 1 second

// digitalClock(87000) -> "1 day, 00:10:00"
// It's 00:10 next day.

//arrow fuction
const digitalClock = (seconds) => {
    let days = Math.floor(seconds / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    let sec = Math.floor(((seconds % 86400) % 3600) % 60);
    if (days > 0) {
        return "It's " + hours + ":" + minutes + ":" + sec + " next day.";
    } else {
        return hours + ":" + minutes + ":" + sec;
    }
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));