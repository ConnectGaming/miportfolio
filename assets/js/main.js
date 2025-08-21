// main.js

// === 1. Scroll suave de fallback ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === 2. Menú hamburguesa ===
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// === 3. Botón de tema claro/oscuro ===
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  // También podés guardar el estado en localStorage si querés
});

// === 4. Imagen dinámica (opcional) ===
const imgExt = '.jpg'; // Cambiá a '.webp' más adelante si convertís

// Ejemplo si decidís usar carga dinámica en el futuro
// document.querySelectorAll('img[data-src]').forEach(img => {
//   const base = img.getAttribute('data-src');
//   img.src = `${base}${imgExt}`;
// });

// === 5. Precarga opcional de imágenes clave ===
// window.addEventListener('load', () => {
//   const preload = ['banner', 'reel-preview'].map(name => {
//     const img = new Image();
//     img.src = `assets/img/${name}${imgExt}`;
//   });
// });

// === Logo dinámico según tema ===
(function() {
  function updateLogo() {
    var logoImg = document.getElementById('site-logo');
    if (!logoImg) return;
    var isLight = document.body.classList.contains('light-mode'); // clase ya usada por el sitio
    logoImg.src = isLight ? 'assets/img/dark_logo.png' : 'assets/img/light_logo.png';
  }

  // Inicializar cuando cargue el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateLogo);
  } else {
    updateLogo();
  }

  // Si existe el botón de tema, volver a calcular luego de togglear
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      // Esperar al cambio de clase (si el toggler lo hace en el mismo tick)
      setTimeout(updateLogo, 0);
    });
  }

  // Observador opcional por si el tema cambia desde otro script
  var obs = new MutationObserver(function() { updateLogo(); });
  obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
})();
