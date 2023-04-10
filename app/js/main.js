// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('animation');
//     }
//   });
// }
// let observer = new IntersectionObserver(onEntry, { threshold: [0.5] });
// let elements = document.querySelectorAll('.scroll-item');
// for (let elm of elements) {
//   observer.observe(elm);
// }

// function onEntry(entry) {
//   entry.forEach(change => {
//     if (change.isIntersecting) {
//       change.target.classList.add('animation2');
//     }
//   });
// }
// let observer2 = new IntersectionObserver(onEntry, { threshold: [0.5] });
// let elements2 = document.querySelectorAll('.scroll-item2');
// for (let elm of elements) {
//   observer2.observe(elm);
// }

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      if (change.target.classList.contains('scroll-item')) {
        change.target.classList.add('animation');
      } else if (change.target.classList.contains('scroll-dash')) {
        change.target.classList.add('animation-dash');
      }
    }
  });
}
  
  let observer = new IntersectionObserver(onEntry, { threshold: [0.5] });
  let elements = document.querySelectorAll('.scroll-item, .scroll-dash');
  for (let elm of elements) {
    observer.observe(elm);
  }






// const scrollItems = document.querySelectorAll('.scroll-item');
// const scrollItemsOpacity = document.querySelectorAll('.scroll-opacity');

// const scrollAnimation = () => {
//   let windowPoint = window.innerHeight / 1.2 + window.scrollY;
//   scrollItemsOpacity.forEach(el => {
//     let scrollOffset = el.offsetTop;
//     if (windowPoint >= scrollOffset) {
//       el.classList.add('animation-opacity');
//     } else {
//       el.classList.remove('animation-opacity');
//     }
//   })
// };

// const scrollAnimationDash = () => {
//   let windowPoint = window.innerHeight / 1.2 + window.scrollY;
//   scrollItems.forEach(el => {
//     let scrollOffset = el.offsetTop;
//     if (windowPoint >= scrollOffset) {
//       el.classList.add('animation-dash');
//     } else {
//       el.classList.remove('animation-dash');
//     }
//   })
// };

// scrollAnimation();
// scrollAnimationDash();
// window.addEventListener('scroll', () => {
//   scrollAnimation();
//   scrollAnimationDash();
//   });

const slider = document.getElementById("slider");
const sliderValueProducts = document.getElementById("sliderValueProducts");
const sliderValuePrice = document.getElementById("sliderValuePrice");

sliderValueProducts.innerHTML = slider.value + " " +"шт.";
sliderValuePrice.innerHTML = slider.value * 5 + " " + "₽";

slider.oninput = function() {
  sliderValueProducts.innerHTML = this.value + " " +"шт.";
  sliderValuePrice.innerHTML = this.value * 5 + " " + "₽";
}
