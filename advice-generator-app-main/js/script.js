const adviceId = document.getElementById('adviceId');
const adviceText = document.getElementById('adviceText');
const adviceBtn = document.getElementById('adviceBtn');
const URL = 'https://api.adviceslip.com/advice';

async function generateAdvice() {

    try{
        fetch(URL)
        .then((result) => result.json())
        .then((data) => (
            (adviceId.textContent = data.slip.id) &&
            (adviceText.textContent = data.slip.advice)
        ));
    }

    catch(error){

        adviceId.textContent = '';
        adviceText.textContent = 'error';

    }

}

adviceBtn.addEventListener('click', generateAdvice);