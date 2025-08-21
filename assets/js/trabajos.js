// assets/js/trabajos.js

function openModal(videoSrc) {
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  modalVideo.src = videoSrc;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Evita scroll del fondo
}

function closeModal() {
  const modal = document.getElementById('video-modal');
  const modalVideo = document.getElementById('modal-video');
  modalVideo.pause();
  modalVideo.src = '';
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del video
window.addEventListener('click', function (e) {
  const modal = document.getElementById('video-modal');
  const modalContent = document.querySelector('.modal-content');
  if (e.target === modal) {
    closeModal();
  }
});
