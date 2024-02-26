document.addEventListener("DOMContentLoaded", function () {
  const daysCards = document.querySelectorAll(
    ".days_container > .countdown_cards"
  );
  const hoursCards = document.querySelectorAll(
    ".hours_container > .countdown_cards"
  );
  const minutesCards = document.querySelectorAll(
    ".minutes_container > .countdown_cards"
  );

  // Set the date and time for the countdown
  const countdownDate = new Date("2024-03-03T00:00:00").getTime();

  const updateCountdown = function () {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    let days = "" + Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours =
      "" + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes =
      "" + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = "" + Math.floor((difference % (1000 * 60)) / 1000);

    if (days < 100 && days > 9) {
      days = "0" + days;
    }else if (days < 10) {
      days = "00" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    // console.log(days, hours, minutes, seconds);
    daysCards[0].textContent = days[0];
    daysCards[1].textContent = days[1];
    daysCards[2].textContent = days[2];
    hoursCards[0].textContent = hours[0];
    hoursCards[1].textContent = hours[1];
    minutesCards[0].textContent = minutes[0];
    minutesCards[1].textContent = minutes[1];
  };

  // Initial call to update the countdown
  updateCountdown();

  // Update the countdown every second
  setInterval(updateCountdown, 1000);
});
