const burger = document.querySelector("#mobile-menu__burger");

burger.onclick = () => {
  document
    .querySelector(".mobile-menu__links")
    .classList.toggle("mobile-menu__links_shown");
  document
    .querySelector(".mobile-menu__line:nth-child(2)")
    .classList.toggle("none");
  document
    .querySelector(".mobile-menu__line:nth-child(1)")
    .classList.toggle("mobile-menu__line_rotated");
  document
    .querySelector(".mobile-menu__line:nth-child(3)")
    .classList.toggle("mobile-menu__line_other-rotated");
};
