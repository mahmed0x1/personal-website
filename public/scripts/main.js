setTimeout(function () {
  window.particlesJS.load(
    "particles-background",
    "/assets/particlesjs-config.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
}, 1000);
