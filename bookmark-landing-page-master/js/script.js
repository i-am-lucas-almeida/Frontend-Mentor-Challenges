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

/*Intelligent search
    
      Our powerful search feature will help you find saved sites in no time at all. 
      No need to trawl through all of your bookmarks.
    
      More Info
    
      Share your bookmarks
    
      Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.
    
      More Info*/

