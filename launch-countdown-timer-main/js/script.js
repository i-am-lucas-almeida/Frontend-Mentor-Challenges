let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

days.textContent = '08';
hours.textContent = '00';
minutes.textContent = '00';
seconds.textContent = '00';

let secondsCounter = '60';
let minutesCounter = '59';
let hoursCounter = '23';
let daysCounter = '8';

const timerSeconds = setInterval (function() {

    secondsCounter--;
    seconds.textContent = secondsCounter;
    minutes.textContent = minutesCounter;
    hours.textContent = hoursCounter;

    if (secondsCounter < '10') {

        seconds.textContent = '0' + secondsCounter;

    }

    if (secondsCounter < '00') {

        minutesCounter--;
        minutes.textContent = minutesCounter;
        secondsCounter = '59';

    } 

    if (minutesCounter < '10') {

        minutes.textContent = '0' + minutesCounter;

    }

    if (minutesCounter < '00') {

        hoursCounter--;
        hours.textContent = hoursCounter;
        minutesCounter = '59';
        minutes.textContent = minutesCounter;

    } 

    if (hoursCounter < '10') {

        hours.textContent = '0' + hoursCounter;

    }

    if (hoursCounter < '00') {

        daysCounter--;
        days.textContent = '0' + daysCounter;
        hoursCounter = '23';
        hours.textContent = hoursCounter;

    } 

    if (daysCounter < '00') {

        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timerSeconds);

    }

}, 1000);