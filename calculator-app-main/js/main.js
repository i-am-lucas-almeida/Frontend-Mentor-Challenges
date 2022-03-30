const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {

    item.onclick = () => {

        if(item.id === 'reset') {

            result.innerText = '';

        } else if(result.innerText === "" && item.id === 'equal') {

            result.classList.add('result_empty');
            result.innerText = 'digite valores';
            setTimeout(() => {
                result.classList.remove('result_empty');
                result.innerText = '';
            }, 3000);

        } else if(item.id === 'backspace') {

            let string = result.innerText.toString();
            result.innerText = string.substr(0, string.length - 1);

        } else if(result.innerText != "" && item.id === 'equal') {

            let match = eval(result.innerText);
            result.innerText = parseInt(match);
            

        } else {

            result.innerText += item.id;

        }

    }

});

document.onkeydown = function (evt) {

    evt = evt || window.evt

    if(evt.key === "Enter"){

        let match = eval(result.innerText);

        result.innerText = parseFloat(match);

    } else if (evt.key === "Backspace") {

        let string = result.innerText.toString();
        result.innerText = string.substr(0, string.length - 1);

    } else if (evt.key === "Delete") {

        result.innerText = '';

    } else if(evt.key === "1" || evt.key === "2" || evt.key === "3" || evt.key === "4" || evt.key === "5" || evt.key === "6" || evt.key === "7" || evt.key === "8" || evt.key === "9" || evt.key === "0" || evt.key === "/" || evt.key === "*" || evt.key === "-" || evt.key === "+" || evt.key === "(" || evt.key === ")" || evt.key === ".") {

        result.innerText += evt.key;
        
    } else if (evt.key === ',') {

        result.innerText += '.';

    }

}

/* THEME BUTTON */

const btnTheme = document.querySelector('#btnTheme');

btnTheme.addEventListener('change', () => {

    changeThemeColor();

});

function changeThemeColor() {

    if(btnTheme.value === '1') {

        document.documentElement.setAttribute('data-theme', 'option_1');

    } else if(btnTheme.value === '2') {

        document.documentElement.setAttribute('data-theme', 'option_2');

    } else if(btnTheme.value === '3') {

        document.documentElement.setAttribute('data-theme', 'option_3');

    }

}

changeThemeColor();