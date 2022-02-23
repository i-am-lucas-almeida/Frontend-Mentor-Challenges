const btnSubmit = document.getElementById('submit');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_2 = document.getElementById('password_2');

const rules = document.getElementById('rules');

const modalSuccess = document.getElementById('modalSuccess');
const modalCheck = document.querySelector('.modal-check');

/* CALL THE FUNCTIONS */

fullName.addEventListener('input', () => {

	nameValidation();

});

email.addEventListener('input', () => {

	emailValidation();

});

password.addEventListener('input', () => {

	passwordValidation();

});

password_2.addEventListener('input', () => {

	confirmPassword();

});

btnSubmit.addEventListener('click', e => {

	e.preventDefault();

	if(nameValidation() === true && emailValidation() === true && passwordValidation() === true && confirmPassword() === true) {

		document.body.style.overflow = 'hidden';
		modalSuccess.style.display = 'grid';
        
        setInterval(function() {

			window.location.reload();

        }, 5000);

	}

});