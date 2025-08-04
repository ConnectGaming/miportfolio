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
