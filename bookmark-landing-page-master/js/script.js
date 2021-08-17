/*NAVBAR MENU*/

function openMenu (mn) {

      let navMenu = document.getElementById(mn);

      if(typeof navMenu == 'undefined' || navMenu === null) return;

      navMenu.style.display = 'grid';
      menu.style.display = 'none';

}

function closeMenu (mn) {

      let navMenu = document.getElementById(mn);

      if(typeof navMenu == 'undefined' || navMenu === null) return;

      navMenu.style.display = 'none';
      menu.style.display = 'block';

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
            h3: 'Bookmark in one click',
            slideText: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',

      },

      {
            slideImage: '/images/illustration-features-tab-2.svg',
            h3: 'Intelligent search',
            slideText: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',

      },

      {
            slideImage: '/images/illustration-features-tab-3.svg',
            h3: 'Share your bookmarks',
            slideText: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',

      },

]

let slide = 0;

const navigation = () => {

      if(slide > freatures.length-1) {
            slide = 0;
      }
      slideImage.innerHTML = `<img src="${freatures[slide].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[slide].h3}</h3>
      <p>${freatures[slide].slideText}</p>`;

      button1.classList.add('activeBtn');

      slide++;

};

navigation();

button1.addEventListener('click', e => {

      slideImage.innerHTML = `<img src="${freatures[0].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[0].h3}</h3>
      <p>${freatures[0].slideText}</p>`;

      button1.classList.add('activeBtn');
      button2.classList.remove('activeBtn');
      button3.classList.remove('activeBtn');

});

button2.addEventListener('click', e => {

      slideImage.innerHTML = `<img src="${freatures[1].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[1].h3}</h3>
      <p>${freatures[1].slideText}</p>`;

      button1.classList.remove('activeBtn');
      button2.classList.add('activeBtn');
      button3.classList.remove('activeBtn');

});

button3.addEventListener('click', e => {

      slideImage.innerHTML = `<img src="${freatures[2].slideImage}">`;
      slideText.innerHTML = `<h3 class="h3">${freatures[2].h3}</h3>
      <p>${freatures[2].slideText}</p>`;

      button1.classList.remove('activeBtn');
      button2.classList.remove('activeBtn');
      button3.classList.add('activeBtn');

});

/******************************************/

/*VALIDATION EMAIL*/

const form = document.getElementById('form');

form.addEventListener('submit', e => {

      e.preventDefault();

      const email = form['email'];
      const emailValue = email.value;
      const small = form.querySelector('small');
      const span = form.querySelector('span');

      if (!emailValue) {

            email.classList.add('error');
            small.style.display = 'block';
            span.style.display = 'none';

      } else if (!isValidEmail(emailValue)) {

            email.classList.add('error');
            small.style.display = 'block';
            span.style.display = 'none';

      } else {

            email.classList.remove('error');
            small.style.display = 'none';
            span.style.display = 'block';

      }
});

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
