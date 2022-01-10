let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

days.textContent = '47';
hours.textContent = '16';
minutes.textContent = '00';
seconds.textContent = '00';

let secondsCounter = '60';
let minutesCounter = '35';

const timerSeconds = setInterval (function() {

    secondsCounter--;
    seconds.textContent = secondsCounter;
    minutes.textContent = minutesCounter;

    if (secondsCounter < '10') {

        seconds.textContent = '0' + secondsCounter;

    }

    if (secondsCounter == '0') {

        minutesCounter--;
        minutes.textContent = minutesCounter;
        secondsCounter = '60';

    } 

    if (minutesCounter < '10') {

        minutes.textContent = '0' + minutesCounter;

    }

}, 1000);

/********************************************************/

const btnSelect = document.getElementById('btnSelect');
const selectBox = document.querySelector('.select-box');
const iconChevron = document.querySelector('.chevron');

const plane = document.getElementById('plane');
const pricePlane = document.getElementById('pricePlane');

const select_1 = document.querySelector('.select-1');
const select_2 = document.querySelector('.select-2');
const select_3 = document.querySelector('.select-3');

const iconCheckFree = document.querySelector('.check-free');
const iconCheckPro = document.querySelector('.check-pro');
const iconCheckUltimate = document.querySelector('.check-ultimate');

btnSelect.addEventListener('click', () => {

    selectBox.classList.toggle('show-box');
    iconChevron.classList.toggle('rotate-chevron');

});

iconCheckFree.classList.add('fa-check--show');

function getPlaneFree() {

    iconCheckFree.classList.add('fa-check--show');
    iconCheckPro.classList.remove('fa-check--show');
    iconCheckUltimate.classList.remove('fa-check--show');
    plane.textContent = 'Basic Pack';
    pricePlane.textContent = 'Free';
    
    selectBox.classList.remove('show-box');
    iconChevron.classList.remove('rotate-chevron');

}

function getPlanePro() {

    iconCheckPro.classList.add('fa-check--show');
    iconCheckFree.classList.remove('fa-check--show');
    iconCheckUltimate.classList.remove('fa-check--show');
    plane.textContent = 'Pro Pack';
    pricePlane.textContent = '$9.99';

    selectBox.classList.remove('show-box');
    iconChevron.classList.remove('rotate-chevron');

}

function getPlaneUltimate() {

    iconCheckUltimate.classList.add('fa-check--show');
    iconCheckFree.classList.remove('fa-check--show');
    iconCheckPro.classList.remove('fa-check--show');
    plane.textContent = 'Ultimate Pack';
    pricePlane.textContent = '$19.99';

    selectBox.classList.remove('show-box');
    iconChevron.classList.remove('rotate-chevron');

}

select_1.addEventListener('click', getPlaneFree);
select_2.addEventListener('click', getPlanePro);
select_3.addEventListener('click', getPlaneUltimate);