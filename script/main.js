const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
    navbar.classList.add('active');
  } else {
    navbar.classList.remove('active');
  }
});
