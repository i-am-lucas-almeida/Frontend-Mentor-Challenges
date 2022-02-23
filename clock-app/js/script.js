const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const dayStatus = document.getElementById('dayStatus');
const hourStatus = document.getElementById('hourStatus');
const iconDay = document.querySelector('.icon-day');
const backgImage = document.getElementById('backgImage');

const more = document.getElementById('more');
const container = document.querySelector('.container-flex');
const quoteCont = document.querySelector('.quote-c');

//pegando as horas e os minutos

function getTime() {

    const time = new Date();
    const actualHour = time.getHours();
    const actualMinutes = time.getMinutes();

    hour.textContent = actualHour;

    if(actualMinutes < 10) {

        minutes.textContent = '0' + actualMinutes;

    } else{

        minutes.textContent = actualMinutes;

    }

    //definindo a mensagem

    let dayMessage = '';

    if (actualHour >= 5 && actualHour <= 11) {

        dayMessage = 'um bom dia';

    } else if (actualHour >= 12 && actualHour <= 17) {

        dayMessage = 'uma boa tarde';

    } else {

        dayMessage = 'uma boa noite';

    }

    dayStatus.textContent = dayMessage;

    //definindo o status AM/PM

    let course = '';

    if(actualHour >= 0 && actualHour < 12) {

        course = 'AM';

    } else {

        course = 'PM';

    }

    //defindo os estilos de dia e noite

    hourStatus.textContent = course;

    if(actualHour >= 5 && actualHour <= 17){

        iconDay.src = '/images/desktop/icon-sun.svg';
        backgImage.classList.add('backg-day');

        more.classList.add('details-day');

    } else{

        iconDay.src = '/images/desktop/icon-moon.svg';
        backgImage.classList.add('backg-night');

        more.classList.add('details-night');
        
    }

}

setInterval(getTime, 1000);

//ativando o slide com mais informações

const btnText = document.querySelector('.btn-text');
const iconArrow = document.querySelector('.icon-arrow');

const moreBtn = document.getElementById('moreBtn');

moreBtn.addEventListener('click', () => {

    container.classList.toggle('transform-slide');
    quoteCont.classList.toggle('transform-slide');
    more.classList.toggle('transform-slide');
    iconArrow.classList.toggle('rotate-icon');

    if(container.classList.contains('transform-slide')){

        btnText.textContent = 'menos';

    } else{

        btnText.textContent = 'mais';

    }

});

//consumindo dados da APi

const timeZone = document.querySelector('.timezone');
const dayWeek = document.getElementById('dayWeek');
const dayYear = document.querySelector('.day-year');
const weekYear = document.querySelector('.week-year');

function getTimeZone() {

    axios.get('https://worldtimeapi.org/api/ip')

    .then((regionRes) => {

        const region = regionRes.data;
        
        timeZone.textContent = region.timezone;
        dayWeek.textContent =  region.day_of_week;
        dayYear.textContent = region.day_of_year;
        weekYear.textContent = region.week_number;
        
    })

    .catch(err => console.error(err));

}

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const btnQuote = document.getElementById('btnQuote');

function getQuote() {

    axios.get('https://allugofrases.herokuapp.com/frases/random')

    .then((frase) => {

        const newQuote = frase.data;
        
        quote.textContent = '"' + newQuote.frase + '"';
        author.textContent = '- ' + newQuote.autor;
        
    })

    .catch(err => console.error(err));

}

btnQuote.addEventListener('click', getQuote);

getTimeZone();
getQuote()