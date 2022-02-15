/*	MENU MOBILE	*/

const btnMenu = document.getElementById('btnMenu');
const menuMobile = document.getElementById('menuMobile');

btnMenu.addEventListener('click', () => {

	menuMobile.classList.toggle('nav-menu--active');

});

/*  UPDATE THE YEAR */

const copyrYear = document.querySelector('.actual-year');

const getYear = new Date();
const actualYear = getYear.getFullYear();

copyrYear.textContent = actualYear;

/*  EMAIL VALIDATION  */

const btnSubmit = document.getElementById('submit');
const email = document.getElementById('email');

btnSubmit.addEventListener('click', e => {

	e.preventDefault();

	emailValidation();

});

function emailValidation() {

	const emailValue = email.value.trim();

	if(emailValue === '') {

		setErrorFor(email, '✘ This field cannot be blank');
		email.focus();

	} else if (!isValidEmail(emailValue)) {

		setErrorFor(email, '✘ This email is invalid');

	} else {

		setSuccessFor(email, '✔ Thanks for signing up');
		email.disabled = true;
		return true;

	}

};

function setErrorFor(input, message) {

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control success';
	small.innerText = message;
}
	
function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/.test(email);
}
