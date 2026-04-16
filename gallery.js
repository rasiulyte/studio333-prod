document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const progress = document.querySelector('.carousel-progress');
  const currentLabel = document.getElementById('carousel-current');
  const totalLabel = document.getElementById('carousel-total');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  let index = 0;

  const setActive = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    // Progress bar
    if (progress) {
      progress.style.width = ((index + 1) / slides.length * 100) + '%';
    }
    // Fraction label
    if (currentLabel) {
      currentLabel.textContent = (index + 1);
    }
    if (totalLabel) {
      totalLabel.textContent = slides.length;
    }
  };

  prevBtn.addEventListener('click', () => setActive(index - 1));
  nextBtn.addEventListener('click', () => setActive(index + 1));
  // Keyboard navigation
  document.querySelector('.carousel').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      setActive(index - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setActive(index + 1);
      e.preventDefault();
    }
  });

  // swipe support
  const slidesContainer = document.querySelector('.slides');
  let startX = null;
  slidesContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  slidesContainer.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const delta = e.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        setActive(index - 1);
      } else {
        setActive(index + 1);
      }
    }
    startX = null;
  });

  // Make carousel focusable for keyboard navigation
  document.querySelector('.carousel').setAttribute('tabindex', '0');
});
