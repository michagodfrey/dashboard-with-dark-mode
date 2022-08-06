// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp

function toggleDarkMode() {
   const body = document.body;
   const h1 = document.querySelector("h1");
   const h3 = document.querySelector("h3");
   const social__card = document.querySelectorAll(".social__card");
   const social__user = document.querySelectorAll(".social__user");
   const social__count = document.querySelectorAll(".social__count");
   const social__followers = document.querySelectorAll(".social__followers")
   const h2 = document.querySelector("h2");
   const overview__card = document.querySelectorAll(".overview__card");
   const overview__statistic = document.querySelectorAll(".overview__statistic");
   const overview__text = document.querySelectorAll(".overview__text");

   body.classList.toggle("dark-mode");

   h1.classList.toggle("dark-mode--title");

   h3.classList.toggle("dark-mode--text");

   for (let i = 0; i < social__card.length; i++) {
     social__card[i].classList.toggle("dark-mode--card");
   }

   for (let i = 0; i < social__user.length; i++) {
     social__user[i].classList.toggle("dark-mode--text");
   }

   for (let i = 0; i < social__count.length; i++) {
     social__count[i].classList.toggle("dark-mode--title");
   }

   for (let i = 0; i < social__followers.length; i++) {
     social__followers[i].classList.toggle("dark-mode--text");
   }

   h2.classList.toggle("dark-mode--title");

   for (let i = 0; i < overview__card.length; i++) {
     overview__card[i].classList.toggle("dark-mode--card");
   }

   for (let i = 0; i < overview__text.length; i++) {
     overview__text[i].classList.toggle("dark-mode--text");
   }

   for (let i = 0; i < overview__statistic.length; i++) {
     overview__statistic[i].classList.toggle("dark-mode--title");
   }

}
