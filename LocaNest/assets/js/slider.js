// Slider générique pour plusieurs carrousels sur la page
function setupSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const nextBtn = slider.querySelector('.slider-btn.next');
  let current = 0;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      slide.style.display = (i === idx) ? 'block' : 'none';
    });
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  nextBtn && nextBtn.addEventListener('click', nextSlide);
  prevBtn && prevBtn.addEventListener('click', prevSlide);

  showSlide(0);
}

window.addEventListener('DOMContentLoaded', () => {
  setupSlider('main-slider');
  setupSlider('avis-slider');
  setupSlider('appart-slider');
  // Initialisation des sliders de la page villes
  setupSlider('slider-casa');
  setupSlider('slider-marrakech');
  setupSlider('slider-rabat');
  setupSlider('slider-tanger');
  setupSlider('slider-agadir');
}); 