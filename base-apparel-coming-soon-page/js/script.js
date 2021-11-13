const button = document.getElementById("button");

button.addEventListener('click', (event) => {

    event.preventDefault();

    const inputEmail = document.getElementById("inputEmail");
    const errorMessage = document.getElementById("errorMessage");
    const errorIcon = document.getElementById("errorIcon");

    if (inputEmail.value == '') {

        errorIcon.classList.add("errorActive");
        errorMessage.classList.add("errorActive");
        errorMessage.innerText = ("This field is required");
        inputEmail.classList.add("inputError");

    } else if (!isValidEmail(inputEmail.value)){

        errorIcon.classList.add("errorActive");
        errorMessage.classList.add("errorActive");
        errorMessage.innerText = ("Please provide a valid email");
        inputEmail.classList.add("inputError");

    } else {

        errorIcon.classList.remove("errorActive");
        errorMessage.classList.remove("errorActive");
        errorMessage.innerText = ("");
        inputEmail.classList.remove("inputError");

    }

});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}