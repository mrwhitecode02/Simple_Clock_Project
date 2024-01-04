/**
 * Start coding the clock's logic with js
 */

let stopwatchInterval;
let stopwatchSeconds = 0;

function updateClock () {

    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');

    const hourDeg = (hours * 30) + (0.5 * minutes); //30 degress per hour, 0.5 degress per minute
    const minuteDeg = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
    const secondDeg = seconds * 6; // 6 degrees per second

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

}

function updateStopwatch () {
    const stopwatch = document.getElementById('stopwatch');
    stopwatchSeconds++;

    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;

    stopwatch.textContent = `${hours.toString().padStart(2, '0')}:
    ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
}

function startStopwatch () {
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    } else {
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    }
} 

function resetStopwatch () {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchSeconds = 0;
    updateStopwatch();
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000);
    updateClock(); // Update immediately on page load
});

