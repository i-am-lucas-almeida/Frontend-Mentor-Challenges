const inputBill = document.getElementById('valueBill');
const inputPercent = document.getElementById('valuePercent');
const inputPerson = document.getElementById('valuePeoples');

const btnPercent1 = document.querySelector('.btn-1');
const btnPercent2 = document.querySelector('.btn-2');
const btnPercent3 = document.querySelector('.btn-3');
const btnPercent4 = document.querySelector('.btn-4');
const btnPercent5 = document.querySelector('.btn-5');

const tipPerson = document.getElementById('tipPerson');
const totalTip = document.getElementById('totalTip');

const btnReset = document.getElementById('btnReset');

const errorBill = document.getElementById('errorBill');
const errorPeople = document.getElementById('errorPeople');

inputBill.addEventListener('input', () => {

    calculate();
    
});

inputPercent.addEventListener('input', () => {

    calculate();

});

inputPerson.addEventListener('input', () => {

    calculate();
    
});

/*FOR MARK THE BUTTONS WITH CHECKED*/

let myButton = document.querySelectorAll('.buttons > button');

myButton.forEach(function(key){

    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });

});

function removeStyles(){

    for (let i = 0; i < myButton.length; i++){

        document.querySelectorAll('.buttons > button')[i].removeAttribute('class');

    }

}

/*FOR CATCH THE PERCENT VALUE*/

let percent = 0;

btnPercent1.addEventListener('click', () => {

    percent = 5 / 100;
    calculate();

});

btnPercent2.addEventListener('click', () => {

    percent = 10 / 100;
    calculate();

});

btnPercent3.addEventListener('click', () => {

    percent = 15 / 100;
    calculate();

});

btnPercent4.addEventListener('click', () => {

    percent = 25 / 100;
    calculate();

});

btnPercent5.addEventListener('click', () => {

    percent = 50 / 100;
    calculate();

});

/*FOR VALIDATE THE FIELDS AND CALCULATE THE VALUE*/

function calculate() {

    if(inputBill.value === '') {

        errorBill.style.display = 'block';
        errorBill.textContent = "Can't be empty";

        inputBill.classList.add('inputError');

    } else if (inputBill.value <= 0) {

        errorBill.style.display = 'block';
        errorBill.textContent = 'Value not accepted';

        inputBill.classList.add('inputError');

    } else if (inputBill.value != '' && inputBill.value > 0) {

        errorBill.style.display = 'none';
        inputBill.classList.remove('inputError');

    } 
    
    if(inputPerson.value === '') {

        errorPeople.style.display = 'block';
        errorPeople.textContent = "Can't be empty";

        inputPerson.classList.add('inputError');

    } else if (inputPerson.value <= 0) {

        errorPeople.style.display = 'block';
        errorPeople.textContent = 'Not accepted';

        inputPerson.classList.add('inputError');

    } else if (inputPerson.value != '' && inputPerson.value > 0) {

        errorPeople.style.display = 'none';
        inputPerson.classList.remove('inputError');

    }
    
    if (inputBill.value === '' || inputBill.value <= 0 || inputPerson.value === '' || inputPerson.value <= 0) {

        tipPerson.textContent = '$00.00';
        totalTip.textContent = '$00.00';

    } else if (inputPercent.value === '' || inputPercent.value <= 0) {

        tipPerson.textContent = '$' + ((inputBill.value * percent) / inputPerson.value).toFixed(2);
        totalTip.textContent = '$' + ((inputBill.value * (percent + 1)) / inputPerson.value).toFixed(2);

    } else if (inputPercent.value != '' && inputPercent.value > 0) {

        percent = 0;
        removeStyles();

        tipPerson.textContent = '$' + ((inputBill.value * (inputPercent.value / 100)) / inputPerson.value).toFixed(2);
        totalTip.textContent = '$' + ((inputBill.value * (inputPercent.value / 100 + 1)) / inputPerson.value).toFixed(2);

    }

}

/*FOR RESET EVERYTHING*/

btnReset.addEventListener('click', () => {

    percent = 0;

    removeStyles();

    inputBill.value = '';
    inputPerson.value = 1;
    inputPercent.value = '';

    tipPerson.textContent = '$00.00';
    totalTip.textContent = '$00.00';

    errorPeople.style.display = 'none';
    errorBill.style.display = 'none';

    inputPerson.classList.remove('inputError');
    inputBill.classList.remove('inputError');

});

$(document).ready(function() {

    $("#valueBill").keyup(function() {

        $("#valueBill").val(this.value.match(/[0-9]*/));

    });

});