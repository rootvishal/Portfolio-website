
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
