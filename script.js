const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());



// Documents download

// const downloadButtons = document.querySelectorAll(".download-btn");
// const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi";

// const initTimer = (button) => {
//   if (button.classList.contains("disable-timer")) {
//     return (location.href = fileLink);
//   }
//   let timer = button.dataset.timer;
//   button.classList.add("timer");
//   button.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;

//   const initCounter = setInterval(() => {
//     if (timer > 0) {
//       timer--;
//       return (button.innerHTML = `Your download will begin in <b>${timer}</b> seconds`);
//     }
//     clearInterval(initCounter);
//     location.href = fileLink;
//     button.innerText = "Your file is downloading...";
//     setTimeout(() => {
//       button.classList.replace("timer", "disable-timer");
//       button.innerHTML = `<span class="icon material-symbols-rounded">DOWNLOAD</span>
//                           <span class="text">Download Again</span>`;
//     }, 3000);
//   }, 1000);
// };

downloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    initTimer(button);
  });
});


///

