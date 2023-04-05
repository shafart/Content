

  const hero = document.querySelector('.section-hero');
  const header = document.querySelector('.header-menu');
  
  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 2;
    console.log(scrollTop);
    console.log(heroCenter);
    
    if (scrollTop >= heroCenter) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

    headerFixed();

    window.addEventListener('scroll', () => {
      headerFixed();
    });

  };


  const slider = document.getElementById("slider");
  const sliderValueProducts = document.getElementById("sliderValueProducts");
  const sliderValuePrice = document.getElementById("sliderValuePrice");

  sliderValueProducts.innerHTML = slider.value + " " +"шт.";
  sliderValuePrice.innerHTML = slider.value * 5 + " " + "₽";

  slider.oninput = function() {
    sliderValueProducts.innerHTML = this.value + " " +"шт.";
    sliderValuePrice.innerHTML = this.value * 5 + " " + "₽";
  }

