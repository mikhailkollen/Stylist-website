const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let hideBtn = [...document.querySelectorAll(".hideBtn")];

hideBtn.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.open = false;
  });
});
