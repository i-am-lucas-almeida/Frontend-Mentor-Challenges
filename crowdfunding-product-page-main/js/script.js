/*MENU NAVBAR*/

function openMenu(mn) {

    let menu = document.getElementById(mn);

    if (typeof menu == 'undefined' || menu ===null) return;

    menu.style.display = 'flex';
    bars.style.display = 'none';
    document.body.style.overflow = 'auto';

};

function closeMenu(mn) {

    let menu = document.getElementById(mn);

    if (typeof menu == 'undefined' || menu ===null) return;

    menu.style.display = 'none';
    bars.style.display = 'block';
    document.body.style.overflow = 'auto';
    
};

/*MODAL - SELECT VALUE*/

function openModal(mn) {

    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal ===null) return;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

};

function closeModal(mn) {

    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal ===null) return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
};

/*OPEN DIV VALUE*/

const value1 = document.getElementById('value1');

const openValue1 = document.getElementById('openValue1');

openValue1.addEventListener('click', e => {

    value1.classList.toggle('valueNull');

});

const value2 = document.getElementById('value2');

const openValue2 = document.getElementById('openValue2');

openValue2.addEventListener('click', e => {

    value2.classList.toggle('valueNull');

});

const value3 = document.getElementById('value3');

const openValue3 = document.getElementById('openValue3');

openValue3.addEventListener('click', e => {

    value3.classList.toggle('valueNull');

});

/*MODAL - SUCCES*/

function openModalSucces(mn) {

    let modalSucces = document.getElementById(mn);

    if (typeof modalSucces == 'undefined' || modalSucces ===null) return;

    modalSucces.style.display = 'flex';
    document.body.style.overflow = 'hidden';

};

function closeModalSucces(mn) {

    let modalSucces = document.getElementById(mn);

    if (typeof modalSucces == 'undefined' || modalSucces ===null) return;

    modalSucces.style.display = 'none';
    document.body.style.overflow = 'auto';
    location.reload();
    
};

