window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const heroSection = document.querySelector(".intro-hero");

  preloader.style.display = "none";
  heroSection.classList.remove("hidden");
});
