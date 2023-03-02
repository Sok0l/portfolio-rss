import i18Obj from './scripts/translate';
import BurgerSub from './scripts/burger.js'
window.onload = () => {
  BurgerSub();
}



  // Смена фотографий
  
  const portfolioBlock = document.querySelector('.button-block');
  const portfolioImages = [...document.querySelectorAll('.portfolio-galley-photo')];
  const portfolioBtn = [...document.querySelectorAll('.button-black')];
  
  const seasonToggle = (event) => {
  if (event.target.classList.contains('button-black')) {
    portfolioImages.forEach((el, index) => {
      el.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`
    })
  }
  toggleActivePortfolioBtn(event);
}

const toggleActivePortfolioBtn = (event) => {
  portfolioBtn.forEach((el) => {
    el.classList.remove('_active')
  })
  event.target.classList.add('_active')
}

const seasonSubscribe = () => {
  portfolioBlock.addEventListener('click', seasonToggle);
}
seasonSubscribe();


//    preload
const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = () => {
  seasons.forEach((index) => {
    for(let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/${index}/${i}.jpg`;
      }}
  )}

  preloadImages();

  //translator
      
const translatorBlock = document.querySelector('.translator');
const elemForTranslate = [...document.querySelectorAll('[data-i18n]')];
const translatorBtn = [...document.querySelectorAll('.translator-item')];

 const toggleLanguage = (event) => {
   if (event.target.classList.contains('translator-item')) {
     const lang = event.target.textContent
     
    elemForTranslate.forEach((el) => {
      const elemDataset = el.dataset.i18n;
      el.textContent = i18Obj[lang][elemDataset]
    })
   }
   toggleActiveBtnActive(event)
 }


const langSubscribe = () => {
  translatorBlock.addEventListener('click', toggleLanguage);
}
langSubscribe()


const toggleActiveBtnActive = (event) => {
  translatorBtn.forEach((el) => {
    el.classList.remove('_active')
    event.target.classList.add('_active')
  })
}
