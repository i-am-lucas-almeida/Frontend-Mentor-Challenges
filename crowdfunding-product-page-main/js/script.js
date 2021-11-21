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

/*BUTTON TOGGLE*/

const button = document.getElementById('btn-gray');

const imgGray = document.getElementById('img-gray');

const imgGreen = document.getElementById('img-green');

button.addEventListener('click', e => {

    button.classList.toggle('active');

    imgGray.classList.toggle('none');

    imgGreen.classList.toggle('block');

});

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

    if (typeof modalSucces == 'undefined' || modalSucces === null) return;

    modalSucces.style.display = 'none';
    document.body.style.overflow = 'auto';
    location.reload();

};

/*INPUT NUMBER VALIDATION*/

function money(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmoney()", 1)
};

function execmoney() {
    v_obj.value = v_fun(v_obj.value)
};

function mMoney(v) {

    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})$/, ",$1");
    v = v.replace(/(\d+)(\d{3},\d{2})$/g, "$1.$2");

    if(v.length >= 5){
        var max = v.replace(/\./g,'').replace(',','.') > 1000;
        var min = v.replace(/\./g,'').replace(',','.') < 25;
  
        if(max){

           return '1.000,00';

        }else if(min){

           return '25,00';

        }else{

           return v;

        }

     }else{

        return v;

     }

};

