document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  // ¿Ya hay una decisión almacenada?
  const choice = localStorage.getItem("cookies_choice");

  if (!choice) {
    // No decidió aún → mostrar
    banner.classList.remove("hidden");
  } else {
    // Ya aceptó o rechazó → no mostrar
    banner.classList.add("hidden");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookies_choice", "accepted");
    banner.classList.add("hidden");
    // Aquí podrías inicializar scripts que dependan del consentimiento
    // initAnalytics();
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookies_choice", "rejected");
    banner.classList.add("hidden");
    // Aquí podrías desactivar/evitar cualquier script opcional
  });
});
