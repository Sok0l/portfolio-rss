const menu = document.querySelector('.hamburger');
const menuBody = document.querySelector('.navidation');
const menuLinks = [...document.querySelectorAll('.nav-link')];

const BurgerSub = () => {
  menu.addEventListener('click', menuToggle)
}

const menuToggle = () => { 
    menu.classList.toggle('_lock');
   
  }
   


  menu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
if(menuLinks.length > 0) {
  for (let index = 0; index < menuLinks.length; index++) {
    const menuLink = menuLinks[index];
    menuLink.addEventListener('click', function(e) {
      document.body.classList.remove('_lock');
      menu.classList.remove('_active');
      menuBody.classList.remove('_active');
    })
  }}

export default BurgerSub;