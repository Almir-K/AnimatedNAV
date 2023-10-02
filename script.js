const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const body = document.body;

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("blue-background");
  body.classList.toggle("white-background");

  // Toggle background position and size with smoother transitions
  if (body.classList.contains("white-background")) {
    body.style.backgroundPosition = "0% 100%";
    body.style.backgroundSize = "100% 200%";
    setTimeout(() => {
      body.style.transition =
        "background-position 0.8s linear, background-size 0.8s linear";
      body.style.backgroundPosition = "0% 0%";
      body.style.backgroundSize = "100% 200%";
    }, 20);
  } else {
    body.style.transition =
      "background-position 0.8s linear, background-size 0.8s linear";
    body.style.backgroundPosition = "0% 100%";
    body.style.backgroundSize = "100% 200%";
  }
});
