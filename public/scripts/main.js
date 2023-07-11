particlesJS.load(
  "particles-background",
  "/assets/particlesjs-config.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

if (document.body.clientWidth <= 767) {
  document
    .querySelector("aside")
    .classList.replace("animate__fadeInLeft", "animate__fadeInUp");
}
