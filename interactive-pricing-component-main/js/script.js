const inputRangeDesktop = document.getElementById('inputRangeDesktop');
const inputRangeMobile = document.getElementById('inputRangeMobile');
const pageViews_monthly = document.querySelector('.page-views_monthly');
const planeValue_monthly = document.querySelector('.value-monthly');
const pageViews_yearly = document.querySelector('.page-views_yearly');
const planeValue_yearly = document.querySelector('.value-yearly');



/*TOGGLE BUTTON*/

const toggle = document.getElementById('toggle');
const planes = document.getElementById('planes');

toggle.addEventListener('change', e => {
	
    planes.classList.toggle('show-yearly');
    planeValue_monthly.classList.toggle('hidden-value');
    planeValue_yearly.classList.toggle('show-value');
    pageViews_yearly.classList.toggle('show-value');
    pageViews_monthly.classList.toggle('hidden-value');

});

/* DESCONT VALUE */

const descontValue = document.querySelector('.descont');

let widthScreen = window.screen.width;

function addDescontValue() {

    if(widthScreen >= 500) {

        descontValue.innerHTML = '25% discount';
    
    } else if (widthScreen < 500) {

        descontValue.innerHTML = '-25%';
    
    }

};

addDescontValue();