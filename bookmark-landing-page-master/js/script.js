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

      slide++;

};

navigation();

button1.addEventListener('click', navigation);

button2.addEventListener('click', navigation);

button3.addEventListener('click', navigation);

