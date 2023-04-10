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


const slider = document.getElementById("slider");
const sliderValueProducts = document.getElementById("sliderValueProducts");
const sliderValuePrice = document.getElementById("sliderValuePrice");

sliderValueProducts.innerHTML = slider.value + " " +"шт.";
sliderValuePrice.innerHTML = slider.value * 5 + " " + "₽";

slider.oninput = function() {
  sliderValueProducts.innerHTML = this.value + " " +"шт.";
  sliderValuePrice.innerHTML = this.value * 5 + " " + "₽";
}
