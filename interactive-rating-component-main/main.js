let btnClass = document.querySelectorAll('.buttons-c > button');
const btnSubmit = document.querySelector('.btn-submit');
const boxInteractive = document.querySelector('.box-interactive');
const container = document.querySelector('.container');

let noteValue = '';

btnClass.forEach(function(key){

    key.addEventListener('click', function(){

        removeStyles();
        this.setAttribute('class', 'btn--active');
        noteValue = this.value;

    });

});

function removeStyles(){

    for (let i = 0; i < btnClass.length; i++){

        btnClass[i].removeAttribute('class', 'btn--active');

    }

}

btnSubmit.addEventListener('click', e => {

    e.preventDefault();

    if(noteValue) {

        boxInteractive.style.display = 'none';
        const message = document.createElement('div');
        message.classList.add('box-message');

        message.innerHTML = `
            
            <div class="animate__animated animate__pulse">
            
                <img src="images/illustration-thank-you.svg" alt="image thanks for your evaluation!"/>

                <div class="box-selected">
            
                    <p>You selected <span>${noteValue}</span> out of 5</p>
            
                </div>
            
                <h1>Thank you!</h1>
            
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

            </div>

        `

        container.appendChild(message);

    }

});