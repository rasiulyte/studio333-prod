document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const progress = document.querySelector('.carousel-progress');
  const currentLabel = document.getElementById('carousel-current');
  const totalLabel = document.getElementById('carousel-total');
  const prevBtn = document.querySelector('.carousel-control.prev');
  const nextBtn = document.querySelector('.carousel-control.next');
  const carousel = document.querySelector('.carousel');
  const slidesContainer = document.querySelector('.slides');
  let index = 0;

  const workFromSlide = (slide) => {
    const img = slide.querySelector('img');
    const src = img.getAttribute('src');
    return {
      title: slide.querySelector('.piece-name').textContent.trim(),
      medium: slide.querySelector('.piece-meta').textContent.trim(),
      src,
      filename: src.split('/').pop(),
      index: Number(slide.dataset.index)
    };
  };

  const setActive = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    if (progress) progress.style.width = ((index + 1) / slides.length * 100) + '%';
    if (currentLabel) currentLabel.textContent = (index + 1);
    if (totalLabel) totalLabel.textContent = slides.length;
  };

  const inquireUrl = (work) => 'inquire.html?works=' + encodeURIComponent(work.title);

  prevBtn.addEventListener('click', () => setActive(index - 1));
  nextBtn.addEventListener('click', () => setActive(index + 1));

  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      setActive(index - 1);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      setActive(index + 1);
      e.preventDefault();
    }
  });

  let startX = null;
  let startY = null;
  slidesContainer.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    startY = e.clientY;
  });
  slidesContainer.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = null;
    startY = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      setActive(index + (dx > 0 ? -1 : 1));
      return;
    }
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) {
      const t = e.target;
      if (t.closest('.inquire-open') || t.closest('.slide.active img') || t.closest('.slide.active')) {
        if (t.closest('a.inquire-open')) return;
        window.location.href = inquireUrl(workFromSlide(slides[index]));
      }
    }
  });

  carousel.setAttribute('tabindex', '0');

  const applyHash = () => {
    const h = (location.hash || '').replace('#', '');
    if (!h || h === 'picker' || h === 'inquire') return;
    const i = slides.findIndex((s) => {
      const file = s.querySelector('img').getAttribute('src').split('/').pop();
      const stem = file.replace(/\.[^.]+$/, '');
      return h === file || h === stem;
    });
    if (i >= 0) setActive(i);
  };
  applyHash();
  window.addEventListener('hashchange', applyHash);
});
