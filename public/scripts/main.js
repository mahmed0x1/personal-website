particlesJS.load(
  "particles-background",
  "/assets/particlesjs-config.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

const side_navigation = document.querySelector("aside");

let isOpen = false;

document.querySelector("#navigation-toggle").addEventListener(
  "click",
  () => {
    if (isOpen) {
      side_navigation.style.display = "none";
      isOpen = false;
      updateToggle();
    } else {
      side_navigation.style.display = "flex";
      isOpen = true;
      updateToggle();
    }
  },
  false
);

function updateToggle() {
  if (isOpen) {
    document.querySelector(
      "#navigation-toggle"
    ).style.left = `${side_navigation.clientWidth}px`;
    document.querySelector("#navigation-toggle").style.paddingLeft = 0;
    document
      .querySelector("#navigation-toggle i")
      .classList.replace("fa-angle-right", "fa-angle-left");
  } else {
    document.querySelector("#navigation-toggle").style.left = 0;
    document.querySelector("#navigation-toggle").style.paddingLeft = "12px";
    document
      .querySelector("#navigation-toggle i")
      .classList.replace("fa-angle-left", "fa-angle-right");
  }
}
