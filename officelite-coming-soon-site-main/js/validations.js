const submit = document.getElementById('submit');
const modal = document.getElementById('modal');
const modalCheck = document.querySelector('.modal-check');
const closeModal = document.getElementById('closeModal');

submit.addEventListener('click', e => {

    e.preventDefault();

    nameValidation();
    emailValidation();
    phoneValidation();
    companyValidation();

    if(nameValidation() == true && emailValidation() == true && phoneValidation() == true && companyValidation() == true) {

        modal.style.display = 'grid';
        
        setInterval(function() {

            modalCheck.classList.add('modal-check--transition');

        }, 200);

    }

});

closeModal.addEventListener('click', () => {

    modal.style.display = 'none';
    modalCheck.classList.remove('modal-check--transition');
    window.location.reload();

});

/*NAME VALIDATION*/

function nameValidation() {

    const name = document.getElementById("name");
    const regexName = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/;

    if (name.value === '') {

        name.focus();
        name.classList.add("inputError");
        name.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[0].classList.add('labelError');
        document.getElementsByTagName('label')[0].classList.remove('labelSuccess');
    
    } else if (!regexName.test(name.value.toUpperCase())) {

        name.classList.add("inputError");
        name.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[0].classList.add('labelError');
        document.getElementsByTagName('label')[0].classList.remove('labelSuccess');

    } else {

        document.getElementsByTagName('label')[0].classList.add('labelSuccess');
        name.classList.add("inputSuccess");
        return true;

    }

}

/*EMAIL VALIDATION*/

function emailValidation() {

    const email = document.getElementById("email");

    if (email.value === '') {

        email.focus();
        email.classList.add("inputError");
        email.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[1].classList.add('labelError');
        document.getElementsByTagName('label')[1].classList.remove('labelSuccess');
    
    } else if (!isValidEmail(email.value)) {

        email.classList.add("inputError");
        email.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[1].classList.add('labelError');
        document.getElementsByTagName('label')[1].classList.remove('labelSuccess');

    } else {

        document.getElementsByTagName('label')[1].classList.add('labelSuccess');
        email.classList.add("inputSuccess");
        return true;

    }

}

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

/*PHONE VALIDATION*/

function phoneValidation() {

    const phone = document.getElementById("phone");
    let phoneNumber = phone.value.replace(/\D+/g, '');

    if (phoneNumber === '') {

        phone.focus();
        phone.classList.add("inputError");
        phone.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[2].classList.add('labelError');
        document.getElementsByTagName('label')[2].classList.remove('labelSuccess');
    
    } else if (phoneNumber.length < 10) {

        phone.classList.add("inputError");
        phone.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[2].classList.add('labelError');
        document.getElementsByTagName('label')[2].classList.remove('labelSuccess');

    } else {

        document.getElementsByTagName('label')[2].classList.add('labelSuccess');
        phone.classList.add("inputSuccess");
        return true;

    }

}

//mask for the input phone

function mask(o, f) {

    setTimeout(function() {
      var v = mphone(o.value);
      if (v != o.value) {
        o.value = v;
      }
    }, 1);

}
  
function mphone(v) {

    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");

    if (r.length > 10) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
      r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      r = r.replace(/^(\d*)/, "($1");
    }
    return r;

}

/*COMPANY VALIDATION*/

function companyValidation() {

    const company = document.getElementById("company");

    if (company.value === '') {

        company.focus();
        company.classList.add("inputError");
        company.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[3].classList.add('labelError');
        document.getElementsByTagName('label')[3].classList.remove('labelSuccess');
    
    } else if (company.value.length < 5) {

        company.classList.add("inputError");
        company.classList.remove("inputSuccess");
        document.getElementsByTagName('label')[3].classList.add('labelError');
        document.getElementsByTagName('label')[3].classList.remove('labelSuccess');

    } else {

        document.getElementsByTagName('label')[3].classList.add('labelSuccess');
        company.classList.add("inputSuccess");
        return true;

    }

}