const scrollItems = document.querySelectorAll('.scroll-item');
const scrollItemsOpacity = document.querySelectorAll('.scroll-opacity');

const scrollAnimation = () => {
  let windowPoint = window.innerHeight / 1.2 + window.scrollY;
  scrollItemsOpacity.forEach(el => {
    let scrollOffset = el.offsetTop;
    if (windowPoint >= scrollOffset) {
      el.classList.add('animation-opacity');
    } else {
      el.classList.remove('animation-opacity');
    }
  })
};

const scrollAnimationDash = () => {
  let windowPoint = window.innerHeight / 1.2 + window.scrollY;
  scrollItems.forEach(el => {
    let scrollOffset = el.offsetTop;
    if (windowPoint >= scrollOffset) {
      el.classList.add('animation-dash');
    } else {
      el.classList.remove('animation-dash');
    }
  })
};

scrollAnimation();
scrollAnimationDash();
window.addEventListener('scroll', () => {
  scrollAnimation();
  scrollAnimationDash();
  });

const slider = document.getElementById("slider");
const sliderValueProducts = document.getElementById("sliderValueProducts");
const sliderValuePrice = document.getElementById("sliderValuePrice");

sliderValueProducts.innerHTML = slider.value + " " +"шт.";
sliderValuePrice.innerHTML = slider.value * 5 + " " + "₽";

slider.oninput = function() {
  sliderValueProducts.innerHTML = this.value + " " +"шт.";
  sliderValuePrice.innerHTML = this.value * 5 + " " + "₽";
}

// const hero = document.querySelector('.section-hero');
// const header = document.querySelector('.header-menu'); 

// const headerFixed = () => {
//   let scrollTop = window.scrollY;
//   let heroCenter = hero.offsetTop;

//   if (scrollTop >= heroCenter) {
//     header.classList.add('fixed');
//     hero.style.marginTop = `${header.offsetHeight}px`
//   } else {
//     header.classList.remove('fixed');
//     hero.style.marginTop = `0px`
//   }
// };
// headerFixed();

// window.addEventListener('scroll', () => {
//   headerFixed();
// });
