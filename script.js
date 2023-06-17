const menu = document.querySelector(".menu-principal");
const mobileNav = document.querySelector(".mobile-nav");

mobileNav.addEventListener("click", () => {
  const visibilidad = menu.getAttribute("data-visible");
  console.log(visibilidad);

  if (visibilidad === "false") {
    menu.setAttribute("data-visible", "true");
    mobileNav.setAttribute("aria-expanded", "true")
  } else if (visibilidad === "true") {
    menu.setAttribute("data-visible", "false");
    mobileNav.setAttribute("aria-expanded", "false")
  }
});

/*
  if (visibilidad === "false") {

    menu.setAttribute("data-visible", true);
    mobileNav.setAttribute("aria-expanded", true)

  } else if (visibilidad === "true") {

    menu.setAttribute("data-visible", false);
    mobileNav.setAttribute("aria-expanded", false)
  }
*/
