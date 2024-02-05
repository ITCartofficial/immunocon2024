let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("carousel_slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    setTimeout(() => {
      slides[i].style.display = "none";
    }, 500);
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  setTimeout(() => {
    slides[slideIndex - 1].style.display = "grid";
  }, 500);

  setTimeout(showSlides, 3500);
}

function prevSlide() {
  const slides = document.getElementsByClassName("slider_element");
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "grid";
}

function nextSlide() {
  const slides = document.getElementsByClassName("slider_element");
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "grid";
}

showSlides();


