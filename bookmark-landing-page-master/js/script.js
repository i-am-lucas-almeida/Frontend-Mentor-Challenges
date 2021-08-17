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

/*Intelligent search
    
      Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.
    
      More Info
    
      Share your bookmarks
    
      Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.
    
      More Info*/

