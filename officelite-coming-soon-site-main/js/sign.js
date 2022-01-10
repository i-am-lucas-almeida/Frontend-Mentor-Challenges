const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputCompany = document.getElementById('company');

/*NAME*/

inputName.addEventListener('focusin', () => {

    if (inputName.value === '') {

        document.getElementsByTagName('label')[0].classList.add('label--focus');

    }

});

inputName.addEventListener('focusout', () => {

    if(inputName.value === '') {

        document.getElementsByTagName('label')[0].classList.remove('label--focus');

    }

});

inputName.addEventListener('input', () => {

    nameValidation();

});

/*EMAIL*/

inputEmail.addEventListener('focusin', () => {

    if (inputEmail.value === '') {

        document.getElementsByTagName('label')[1].classList.add('label--focus');

    }

});

inputEmail.addEventListener('focusout', () => {

    if(inputEmail.value === '') {

        document.getElementsByTagName('label')[1].classList.remove('label--focus');

    }

});

inputEmail.addEventListener('input', () => {

    emailValidation();

});

/*PHONE*/

inputPhone.addEventListener('focusin', () => {

    if (inputPhone.value === '') {

        document.getElementsByTagName('label')[2].classList.add('label--focus');

    }

});

inputPhone.addEventListener('focusout', () => {

    if(inputPhone.value === '') {

        document.getElementsByTagName('label')[2].classList.remove('label--focus');

    }

});

inputPhone.addEventListener('input', () => {

    phoneValidation();

});

/*COMPANY*/

inputCompany.addEventListener('focusin', () => {

    if (inputCompany.value === '') {

        document.getElementsByTagName('label')[3].classList.add('label--focus');

    }

});

inputCompany.addEventListener('focusout', () => {

    if(inputCompany.value === '') {

        document.getElementsByTagName('label')[3].classList.remove('label--focus');

    }

});

inputCompany.addEventListener('input', () => {

    companyValidation();

});