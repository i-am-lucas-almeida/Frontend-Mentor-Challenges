const email = document.getElementById('email');
const btnSubmit = document.getElementById('submit');
const message = document.getElementById('message');
const iconError = document.querySelector('.icon-error');
const iconSuccess = document.querySelector('.icon-success');

btnSubmit.addEventListener('click', e => {

    e.preventDefault();

    const emailValue = email.value.trim();

    if(emailValue === '') {

        email.classList.add('email--error');
        message.classList.add('input-message--error');
        iconError.classList.add('input-message--error');
        message.textContent = 'This field cannot be empty';

    } else if (!isValidEmail(emailValue)) {

        email.classList.add('email--error');
        message.classList.add('input-message--error');
        iconError.classList.add('input-message--error');
        message.textContent = "Oops! That doesn't look like an email address";

    } else if(isValidEmail(emailValue)) {

        email.classList.add('email--success');
        message.classList.add('input-message--success');
        iconSuccess.classList.add('input-message--success');
        iconError.classList.remove('input-message--error');
        message.textContent = 'All right. We will notify you!';

        email.disabled = 'true';
        btnSubmit.disabled = 'true';

    }

});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
	return re.test(String(email).toLowerCase());
}