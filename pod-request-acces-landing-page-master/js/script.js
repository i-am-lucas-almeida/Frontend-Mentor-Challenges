const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	const email = form['email'];
	const emailValue = email.value;
	const small = form.querySelector('small');
	const span = form.querySelector('span');


	if (!emailValue) {

		//quando campo está em branco
		email.classList.add('error');
		small.innerText = 'Oops! Please check your email';
		small.style.display = 'block';

	} else if (!isValidEmail(emailValue)) {

		//quando email é inválido
		email.classList.add('error');
		small.innerText = 'Email is invalid!';
		small.style.display = 'block';

	} else {

		//quando email é válido
		email.classList.remove('error');
		small.innerText = '';
		span.innerText = '✓ Email is valid!';
		span.style.display = 'block';
	}

});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}