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
