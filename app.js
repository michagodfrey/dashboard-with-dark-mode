// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

function toggleDarkMode() {
   const body = document.body;
   const h3 = document.querySelector("h3");
   const social__user = document.querySelectorAll(".social__user");
   const h2 = document.querySelector("h2");
   // const card = document.querySelector(".social--twitter");
   const overview__statistic = document.querySelector(".overview__statistic");



   // body.classList.toggle("dark-mode");
   // card.classList.toggle("dark-mode--card");
   h3.classList.toggle("dark-mode--h3");
   for (let i = 0; i < social__user.length; i++) {
     social__user[i].classList.toggle("dark-mode--h3");
   }

   h2.classList.toggle("dark-mode");
   overview__statistic.classList.toggle("darkmode");
}
