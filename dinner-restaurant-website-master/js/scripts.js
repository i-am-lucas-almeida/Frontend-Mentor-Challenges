const button = document.getElementById("buttonReserv");

button.addEventListener('click', e => {

    e.preventDefault();

    nameValidation();

    emailValidation();

    dateValidation();

    timeValidation();

    /*se tudo for válido dá reload na página (poderia chamar uma nova página).*/

    if (nameValidation() == true && emailValidation() == true && dateValidation() == true && timeValidation() == true) {

        location.reload();

    }

});

function nameValidation() {

    const name = document.getElementById("name");
    const errorName = document.getElementById("nameError");

    if (name.value == '') {

        name.focus();
        name.classList.add("inputError");
        errorName.innerHTML = 'Name is required';
        errorName.classList.add("inputError");
        name.classList.remove("inputSuccess");
    
    } else if (name.value.length < 8) {

        name.focus();
        name.classList.add("inputError");
        errorName.innerHTML = 'Enter your full name';
        errorName.classList.add("inputError");
        name.classList.remove("inputSuccess");

    } else {

        errorName.classList.remove("inputError");
        errorName.innerHTML = '';
        name.classList.add("inputSuccess");
        return true;

    }

}

function emailValidation() {

    const email = document.getElementById("email");
    const errorEmail = document.getElementById("emailError");

    if (email.value == '') {

        email.focus();
        email.classList.add("inputError");
        errorEmail.innerHTML = 'Email is required';
        errorEmail.classList.add("inputError");
        email.classList.remove("inputSuccess");
    
    } else if (!isValidEmail(email.value)) {

        email.focus();
        email.classList.add("inputError");
        errorEmail.innerHTML = 'Enter a valid email';
        errorEmail.classList.add("inputError");
        email.classList.remove("inputSuccess");

    } else {

        errorEmail.classList.remove("inputError");
        errorEmail.innerHTML = '';
        email.classList.add("inputSuccess");
        return true;

    }

}

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function dateValidation() {

    const month = document.getElementById("month");
    const day = document.getElementById("day");
    const year = document.getElementById("year");
    const dateError = document.getElementById("dateError")

    if (month.value == '' || month.value.length < 2 || month.value == 0 || month.value < 0 || month.value > 12) {

        month.focus();
        month.classList.add("inputError");
        dateError.classList.add("inputError");
        dateError.innerHTML = 'This field is invalid';
    
    } else if (day.value == '' || day.value.length < 2 || day.value == 0 || day.value < 0 || day.value > 31) {

        day.focus();
        day.classList.add("inputError");
        dateError.classList.add("inputError");
        dateError.innerHTML = 'This field is invalid';
    
    } else if (year.value == '' || year.value.length < 4 || year.value == 0 || year.value < 2021 || year.value >= 2022) {

        year.focus();
        year.classList.add("inputError");
        dateError.classList.add("inputError");
        dateError.innerHTML = 'This field is invalid';
    
    } else {

        month.classList.remove("inputError");
        day.classList.remove("inputError");
        year.classList.remove("inputError");
        dateError.innerHTML = '';
        return true;

    }

}

function timeValidation() {

    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const timeError = document.getElementById("timeError")

    if (hour.value == '' || hour.value.length < 2 || hour.value == 0 || hour.value < 9 || hour.value > 22) {

        hour.focus();
        hour.classList.add("inputError");
        timeError.classList.add("inputError");
        timeError.innerHTML = 'This field is invalid';
    
    } else if (minute.value == '' || minute.value.length < 2 || minute.value < 0 || minute.value > 59) {

        minute.focus();
        minute.classList.add("inputError");
        timeError.classList.add("inputError");
        timeError.innerHTML = 'This field is invalid';
    
    } else {

        hour.classList.remove("inputError");
        minute.classList.remove("inputError");
        timeError.innerHTML = '';
        return true;

    }

}

/*********************************************************************/

const buttonMinus = document.getElementById("minus");
const buttonPlus = document.getElementById("plus");
const peopleNum = document.getElementById("peopleNum");

let peopleQuant = 1;

buttonPlus.addEventListener('click', e => {

    e.preventDefault();

    if (peopleQuant < 10) {

        peopleQuant += 1;
        peopleNum.innerHTML = peopleQuant + ' ' + 'peoples';

    }

});

buttonMinus.addEventListener('click', e => {

    e.preventDefault();

    if (peopleQuant > 1) {

        peopleQuant -= 1;
        peopleNum.innerHTML = peopleQuant + ' ' + 'peoples';

    }

    if (peopleQuant == 1) {

        peopleNum.innerHTML = peopleQuant + ' ' + 'person';

    }

});