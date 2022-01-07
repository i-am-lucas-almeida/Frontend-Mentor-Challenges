/*FUNCTION TO UPDATE THE YEAR*/

const actualYear = document.querySelector('.actual-year');

let getYear = new Date();
let year = getYear.getFullYear();

actualYear.textContent = year;

/*FUNCTIONS TO COPY THE EMAIL*/

const getEmail = document.querySelector('.email');

getEmail.addEventListener('click', () => {

    navigator.clipboard.writeText('equalizer@example.com');
    getEmail.classList.add('email--click');

    time();

});

function time() {

    setTimeout (function() {

        getEmail.classList.remove('email--click');

    }, 300);

}