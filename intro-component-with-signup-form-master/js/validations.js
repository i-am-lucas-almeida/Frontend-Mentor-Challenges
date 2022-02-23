/* NAME VALIDATION */

function nameValidation() {

	const fullNameValue = fullName.value.trim();

	if(fullNameValue === '') {

		setErrorFor(fullName, 'This field cannot be blank');
		fullName.focus();

	} else if(!isValidName(fullNameValue)) {

		setErrorFor(fullName, 'Full name is invalid');
		fullName.focus();

	} else {

		setSuccessFor(fullName);
		return true;

	}

}

/* EMAIL VALIDATION */

function emailValidation() {

	const emailValue = email.value.trim();

	if(emailValue === '') {

		setErrorFor(email, 'This field cannot be blank');
		email.focus();

	} else if (!isValidEmail(emailValue)) {

		setErrorFor(email, 'Email is invalid');
		email.focus();

	} else {

		setSuccessFor(email);
		return true;

	}

}

/* PASSWORD VALIDATION */

function passwordValidation() {

	const passwordValue = password.value.trim();

	if(passwordValue === '') {

		setErrorFor(password, 'This field cannot be blank');
		password.focus();

	} else if(!isValidPassword(passwordValue)) {

		setErrorFor(password, 'Password is invalid');
		password.focus();

	} else {

		setSuccessFor(password);
		return true;

	}

}

password.addEventListener('focusin', () => {

	rules.classList.add('show-modal');

});

password.addEventListener('focusout', () => {

	rules.classList.remove('show-modal');

});

/* PASSWORD CONFIRM */

function confirmPassword() {

	const password_2Value = password_2.value.trim();

	if(password_2Value === '') {

		setErrorFor(password_2, 'This field cannot be blank');
		password_2.focus();

	} else if(password_2Value !== password.value.trim()) {

		setErrorFor(password_2, 'Passwords do not match');
		password_2.focus();

	} else if (password_2Value === password.value.trim()) {

		setSuccessFor(password_2);
		return true;

	}

}

/*************************************************************/

function setErrorFor(input, message) {

	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';

}
	
function isValidEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/.test(email);
}

function isValidName(name) {

	return /^[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[a-zA-ZÀ-Ÿ][A-zÀ-ÿ']+$/.test(name);

}

function isValidPassword(password) {

	return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!%$*&@#])[0-9a-zA-Z!%$*&@#]{8,}$/.test(password);

}