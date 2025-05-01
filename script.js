// Lightbox öffnen
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-content');
const caption = document.querySelector('.caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.overlay');
    lightbox.classList.remove('hidden');
    lightboxImg.src = img.src;
    caption.textContent = overlay.textContent;
  });
});

// Lightbox schließen
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Schließen mit Klick außerhalb des Bildes
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});
