const iconMenu = document.getElementById('iconMenu');
const iconClose = document.getElementById('iconClose');
const menuMobile = document.getElementById('menuMobile');

iconMenu.addEventListener('click', () => {

    menuMobile.classList.add('menu-mobile--active');
    iconMenu.classList.add('icon--inative');
    iconClose.classList.add('icon--active');
    document.body.style.overflow = 'hidden';

});

iconClose.addEventListener('click', () => {

    menuMobile.classList.remove('menu-mobile--active');
    iconMenu.classList.remove('icon--inative');
    iconClose.classList.remove('icon--active');
    document.body.style.overflow = 'auto';

});

/* FUNCTION TO UPDATE THE YEAR */

const actual_year = document.querySelector('.actual_year');

const year = new Date();
const getYear = year.getFullYear();

actual_year.textContent = getYear;

/* FUNCTION TO ADD ANIMATIONS */

const about = document.getElementById('about');
const creations = document.getElementById('creations');

window.addEventListener("scroll", function () {

    var scroll_position = this.scrollY;
    console.log(scroll_position);

    if(scroll_position >= 300) {

        about.classList.add('scroll--animate');

    }

    if(scroll_position >= 1000) {

        creations.classList.add('scroll--animate');

    }

});