const button = document.getElementById("button");

button.addEventListener('click', (event) => {

    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorNameIcon = document.getElementById("errorNameIcon");
    const errorNameMessage = document.getElementById("errorNameMessage");
    const errorLastNameIcon = document.getElementById("errorLastNameIcon");
    const errorLastNameMessage = document.getElementById("errorLastNameMessage");
    const errorEmailIcon = document.getElementById("errorEmailIcon");
    const errorEmailMessage = document.getElementById("errorEmailMessage");
    const errorPasswordIcon = document.getElementById("errorPasswordIcon");
    const errorPasswordMessage = document.getElementById("errorPasswordMessage");

    if (firstName.value == '' || firstName.value.length < 3) {

        firstName.classList.add("inputError");
        errorNameIcon.classList.add("inputError");
        errorNameMessage.classList.add("inputError");
        firstName.focus();

    } else{

        firstName.classList.remove("inputError");
        errorNameIcon.classList.remove("inputError");
        errorNameMessage.classList.remove("inputError");

    }

    if (lastName.value == '' || lastName.value.length < 4) {

        lastName.classList.add("inputError");
        errorLastNameIcon.classList.add("inputError");
        errorLastNameMessage.classList.add("inputError");
        lastName.focus();

    } else{

        lastName.classList.remove("inputError");
        errorLastNameIcon.classList.remove("inputError");
        errorLastNameMessage.classList.remove("inputError");

    }

    if (email.value == '' || email.value.indexOf(".") == (-1) || email.value.indexOf("@") == (-1) || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {

        email.classList.add("inputError");
        errorEmailIcon.classList.add("inputError");
        errorEmailMessage.classList.add("inputError");
        document.getElementsByName("email")[0].placeholder = 'email@example.com';
        email.focus();

    } else{

        email.classList.remove("inputError");
        errorEmailIcon.classList.remove("inputError");
        errorEmailMessage.classList.remove("inputError");

    }

    if (password.value == '' || password.value.length < 6) {

        password.classList.add("inputError");
        errorPasswordIcon.classList.add("inputError");
        errorPasswordMessage.classList.add("inputError");
        password.focus();

    } else{

        password.classList.remove("inputError");
        errorPasswordIcon.classList.remove("inputError");
        errorPasswordMessage.classList.remove("inputError");

    }

});