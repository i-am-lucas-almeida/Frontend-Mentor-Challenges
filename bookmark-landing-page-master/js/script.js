/*NAVBAR MENU*/

const navMenu = document.getElementById('navMenu');

function openMenu() {

      navMenu.classList.add('nav-menu--active');

}

function closeMenu() {

      navMenu.classList.remove('nav-menu--active');

}

/*ACCORDION TOGGLE*/

this.addEventListener('DOMContentLoaded', () => {

      const questions = document.querySelectorAll('.question');

      questions.forEach((question) => question.addEventListener('click', () =>{

            if(question.parentNode.classList.contains('active')) {

                  question.parentNode.classList.toggle('active');

            }

      else{

            questions.forEach(question => question.parentNode.classList.remove('active'));

            question.parentNode.classList.add('active');
      }

      }))

});

/*SLIDE GALERY*/

const button1 = document.querySelector('.button1');

const button2 = document.querySelector('.button2');

const button3 = document.querySelector('.button3');

const slideImage = document.querySelector('.slideImage');

const slideText = document.querySelector('.slideText');

const freatures = [

      {
            slideImage: '/images/illustration-features-tab-1.svg',
            h3: 'Seus favoritos em um clique',
            slideText: 'Organize seus favoritos como quiser. Nossa interface simples de arrastar e soltar oferece controle total sobre como você gerencia seus sites favoritos.',

      },

      {
            slideImage: '/images/illustration-features-tab-2.svg',
            h3: 'Busca Inteligente',
            slideText: 'Nosso poderoso recurso de pesquisa ajudará você a encontrar sites salvos rapidamente. Não há necessidade de vasculhar todos os seus favoritos.',

      },

      {
            slideImage: '/images/illustration-features-tab-3.svg',
            h3: 'Compartilhe seus favoritos',
            slideText: 'Compartilhe facilmente seus favoritos e coleções com outras pessoas. Crie um link compartilhável que você pode enviar com o clique de um botão.',

      },

]

let slide = 0;

const navigation = () => {

      if(slide > freatures.length-1) {
            slide = 0;
      }
      slideImage.innerHTML = `<img src="${freatures[slide].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[slide].h3}</h3>
      <p>${freatures[slide].slideText}</p> <button class="btn-info btnInfo">Saiba mais</button>`;

      button1.classList.add('activeBtn');

      slide++;

};

navigation();

function removeClass() {

      if(slideText.classList.contains('animate__slideInRight')) {

            setTimeout(function(){

                  slideText.classList.remove('animate__slideInRight');

            }, 1000);

      } 

      if(slideImage.classList.contains('animate__slideInLeft')) {

            setTimeout(function(){

                  slideImage.classList.remove('animate__slideInLeft');

            }, 1000);

      } 

}

button1.addEventListener('click', () => {

      slideImage.innerHTML = `<img src="${freatures[0].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[0].h3}</h3>
      <p>${freatures[0].slideText}</p> <button class="btn-info btnInfo">Saiba mais</button>`;

      button1.classList.add('activeBtn');
      button2.classList.remove('activeBtn');
      button3.classList.remove('activeBtn');

      slideText.classList.add('animate__slideInRight');
      slideImage.classList.add('animate__slideInLeft');
      removeClass();

});

button2.addEventListener('click', () => {

      slideImage.innerHTML = `<img src="${freatures[1].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[1].h3}</h3>
      <p>${freatures[1].slideText}</p> <button class="btn-info btnInfo">Saiba mais</button>`;

      button1.classList.remove('activeBtn');
      button2.classList.add('activeBtn');
      button3.classList.remove('activeBtn');

      slideText.classList.add('animate__slideInRight');
      slideImage.classList.add('animate__slideInLeft');
      removeClass();

});

button3.addEventListener('click', () => {

      slideImage.innerHTML = `<img src="${freatures[2].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[2].h3}</h3>
      <p>${freatures[2].slideText}</p> <button class="btn-info btnInfo">Saiba mais</button>`;

      button1.classList.remove('activeBtn');
      button2.classList.remove('activeBtn');
      button3.classList.add('activeBtn');

      slideText.classList.add('animate__slideInRight');
      slideImage.classList.add('animate__slideInLeft');
      removeClass();

});

/******************************************/

/*VALIDATION EMAIL*/

const form = document.getElementById('form');

form.addEventListener('submit', e => {

      e.preventDefault();

      const email = document.getElementById('email');
      const iconError = document.querySelector('.icon-error');
      const btnSubmit = document.getElementById('submit');

      const emailValue = email.value.trim();
      const inputMessage = document.getElementById('inputMessage');
      const message = document.getElementById('message');

      if (!emailValue) {

            inputMessage.classList.add('input-message--error');
            iconError.classList.add('icon-error--active');
            message.textContent = 'Informe seu email!'

      } else if (!isValidEmail(emailValue)) {

            inputMessage.classList.add('input-message--error');
            iconError.classList.add('icon-error--active');
            message.textContent = 'Oops, esse email é inválido!'

      } else if (isValidEmail(emailValue)) {

            inputMessage.classList.add('input-message--success');
            iconError.classList.remove('icon-error--active');
            message.textContent = 'Obrigado por se inscrever!';
            btnSubmit.disabled = true;
            email.disabled = true;

      }
});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
	return re.test(String(email).toLowerCase());
};
