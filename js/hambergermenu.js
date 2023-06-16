// document
//         .querySelector(".hamburger-menu")
//         .addEventListener("click", function () {
//             console.log('clicking....')
//           document.querySelector(".nav-menu").classList.toggle("open");
//         });
// Get the menu button and menu element
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Function to toggle the menu
function toggleMenu() {
  navMenu.classList.toggle('open');
}

// Event listener for the hamburger menu button
hamburgerMenu.addEventListener('click', toggleMenu);

// Event listener for clicks outside of the menu
document.addEventListener('click', function(event) {
  const target = event.target;
  if (!navMenu.contains(target) && !hamburgerMenu.contains(target)) {
    navMenu.classList.remove('open');
  }
});
