// Show Card details Function
function loadCardDetails(e) {
  // e.parentNode.parentNode.querySelector()
  const profileCardDescription = e.target.parentNode.parentNode.querySelector(
    ".profile_description"
  );
  const imgContainer =
    e.target.parentNode.parentNode.querySelector(".card_img");
  const profileImg = e.target.parentNode.parentNode.querySelector("img");
  const showDetailsBtn =
    e.target.parentNode.parentNode.querySelector(".show_full-icon");

  if (showDetailsBtn.classList.contains("fa-plus")) {
    showDetailsBtn.classList.remove("fa-plus");
    showDetailsBtn.classList.add("fa-minus");
    imgContainer.style.height = "70px";
    profileImg.style.marginTop = "-45px";
    profileCardDescription.style.display = "block";
  } else if (showDetailsBtn.classList.contains("fa-minus")) {
    showDetailsBtn.classList.remove("fa-minus");
    showDetailsBtn.classList.add("fa-plus");
    profileCardDescription.style.display = "none";
    if(window.innerWidth < 600){
      imgContainer.style.height = "170px";
    } else {
      imgContainer.style.height = "222px";
    }
    profileImg.style.marginTop = "0px";
  }
}

// Color toggle on registration page table
if (document.querySelector(".sep5")) {
  const sep5Span = document.querySelector(".sep5");
  const sep30Span = document.querySelector(".sep30");

  function toggleColors() {
    if (sep5Span.style.color === "limegreen") {
      sep5Span.style.color = "white";
      sep5Span.style.textDecoration = "none";
      sep30Span.style.color = "white";
      sep30Span.style.textDecoration = "none";
    } else {
      sep5Span.style.color = "limegreen";
      sep5Span.style.textDecoration = "underline";
      sep30Span.style.color = "limegreen";
      sep30Span.style.textDecoration = "underline";
    }
  }

  setInterval(toggleColors, 2000);
}

// mobile nav
if (document.getElementById("mobileNav")) {
  const navLists = document.querySelector(".nav_menu");
  const mobileNavListClone = navLists.cloneNode(true);
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.append(mobileNavListClone);

  const hamburgerMenuBtn = document.getElementById("hamburgerMenuBtn");
  const hamburgerDropdownMenuIcons = document.querySelectorAll(
    ".mobile_nav .dropdown_icon"
  );

  let isMenuOpen = false;
  let isDropDownOpen = false;

  hamburgerMenuBtn.addEventListener("click", () => {
    if (isMenuOpen) {
      mobileNav.style.display = "none";
      isMenuOpen = false;
    } else {
      mobileNav.style.display = "block";
      isMenuOpen = true;
    }
  });

  hamburgerDropdownMenuIcons.forEach((hamburgerDropdownMenuIcon) => {
    hamburgerDropdownMenuIcon.addEventListener("click", (e) => {
      if (isDropDownOpen) {
        e.target.parentNode.querySelector(".dropdown_menu").style.display =
          "none";
        isDropDownOpen = false;
        e.target.classList.remove("fa-angle-down");
        e.target.classList.add("fa-angle-up");
      } else {
        e.target.parentNode.querySelector(".dropdown_menu").style.display =
          "block";
        e.target.classList.add("fa-angle-down");
        e.target.classList.remove("fa-angle-up");
        isDropDownOpen = true;
      }
    });
  });
}

// Automatic image Slider with radio button
if (document.querySelector(".slider-container")) {
  const slideContainer = document.querySelector(".slider-container");
  const slides = slideContainer.querySelectorAll(".slide");
  const radios = document.querySelectorAll(".radio-buttons input");

  let slideIndex = 0;

  const showSlide = (n) => {
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    radios.forEach((radio) => {
      radio.checked = false;
    });

    slides[slideIndex].style.display = "flex";
    radios[slideIndex].checked = true;
  };

  const handleRadioClick = (index) => {
    slideIndex = index;
    showSlide(slideIndex);
  };

  const handleNextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  };

  const handlePrevSlide = () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  };

  radios.forEach((radio, index) => {
    radio.addEventListener("click", () => {
      handleRadioClick(index);
    });
  });

  slides.forEach((slide, index) => {
    slide.addEventListener("click", (event) => {
      const boundingRect = slide.getBoundingClientRect();
      const clickX = event.clientX - boundingRect.left;
      const slideWidth = boundingRect.width;

      if (clickX < slideWidth / 2) {
        handlePrevSlide();
      } else {
        handleNextSlide();
      }
    });
  });

  setInterval(() => {
    handleNextSlide();
  }, 3000); // Change slide every 3 seconds

  // Show initial slide
  showSlide(slideIndex);
}

function prepareEmail() {
  var fname = document.getElementById("fname").value.trim();
  var lname = document.getElementById("lname").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var subject = document.querySelector('input[name="Subject"]:checked').value;
  var message = document.getElementById("message").value.trim();

  var emailBody = "Name: " + fname + " " + lname + "\n";
  emailBody += "Email: " + email + "\n";
  emailBody += "Phone: " + phone + "\n";
  emailBody += "Message: \n" + message;

  var encodedSubject = encodeURIComponent(subject);
  var encodedBody = encodeURIComponent(emailBody);

  var mailtoLink =
    "mailto:immunocon2024@gmail.com?subject=" +
    encodedSubject +
    "&body=" +
    encodedBody;
  
  window.location.href = mailtoLink;
}


