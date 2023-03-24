const slider = document.getElementById("slider");
const sliderValueProducts = document.getElementById("sliderValueProducts");
const sliderValuePrice = document.getElementById("sliderValuePrice");

sliderValueProducts.innerHTML = slider.value + " " +"шт.";
sliderValuePrice.innerHTML = slider.value * 5 + " " + "₽";

slider.oninput = function() {
  sliderValueProducts.innerHTML = this.value;
  sliderValuePrice.innerHTML = this.value * 5;
}

