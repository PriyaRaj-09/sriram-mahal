const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % totalSlides;
  slides[currentSlide].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
});

// Auto-play every 5 seconds
setInterval(() => document.getElementById('nextBtn').click(), 5000);

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});