/*   MENU DROPDOWN   */

document.addEventListener('click', e => {

    const isDropdownButton = e.target.matches('[data-dropdown-button]');

    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown;

    if(isDropdownButton) {

        currentDropdown = e.target.closest('[data-dropdown');

        currentDropdown.classList.toggle('active');

    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {

        if(dropdown === currentDropdown) return

        dropdown.classList.remove('active');

    })

})

/*   MENU MOBILE   */

const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const backgMenu = document.querySelector('.navbar__menu');
const menu = document.querySelector(".navbar__menu_mobile");

openMenu.addEventListener('click', () => {

    backgMenu.classList.add('active');
    menu.classList.add('active');

});

closeMenu.addEventListener('click', () => {

    menu.classList.remove('active');
    backgMenu.classList.remove('active');

});

backgMenu.addEventListener('click', function(e) {

    if(e.target == this) {

        menu.classList.remove('active');
        backgMenu.classList.remove('active');

    }

})