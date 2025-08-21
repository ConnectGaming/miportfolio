// assets/js/trabajos.js

const videoCards = document.querySelectorAll('.video-card');
const modal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalClose = document.querySelector('.modal-close');

// Función para abrir modal y cargar video
function openModal(videoSrc) {
  modal.style.display = 'flex';
  modalVideo.src = videoSrc + "?autoplay=1&rel=0";
  document.body.style.overflow = 'hidden'; // Evita scroll del fondo
}

// Función para cerrar modal y detener video
function closeModal() {
  modal.style.display = 'none';
  modalVideo.src = '';
  document.body.style.overflow = 'auto';
}

// Asociar click en cada video-card
videoCards.forEach(card => {
  card.addEventListener('click', () => {
    openModal(card.dataset.video);
  });
});

// Asociar click al botón de cerrar
modalClose.addEventListener('click', closeModal);

// Cerrar modal al hacer click fuera del contenido
window.addEventListener('click', function (e) {
  if (e.target === modal) {
    closeModal();
  }
});
