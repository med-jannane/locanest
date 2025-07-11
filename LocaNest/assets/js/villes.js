// Filtrage dynamique des villes/quartiers
window.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('ville-search');
  const blocks = document.querySelectorAll('.ville-block');
  if (!search) return;
  search.addEventListener('input', () => {
    const val = search.value.toLowerCase();
    blocks.forEach(block => {
      const data = block.getAttribute('data-ville').toLowerCase();
      block.style.display = data.includes(val) ? '' : 'none';
    });
  });
}); 
document.querySelectorAll('.slider').forEach(slider => {
  const slides = slider.querySelectorAll('.slide');
  let current = 0;

  slider.querySelector('.next').addEventListener('click', () => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  });

  slider.querySelector('.prev').addEventListener('click', () => {
    slides[current].classList.remove('active');
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
  });
});
