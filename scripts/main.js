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
    imgContainer.style.height = "222px";
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
