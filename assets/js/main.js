// open menu and close it in small screen
const menuIcon = document.querySelector(".menu-icon"),
  closeMenu = document.querySelector(".close-menu"),
  menu = document.querySelector(".menu-small-screen");
checkMenu();
function checkMenu() {
  if (menu.style.width == "100%") {
    menuIcon.classList.add("active");
  } else {
    menuIcon.classList.remove("active");
  }
}
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  if (menuIcon.classList.contains("active")) {
    menu.style.width = "100%";
  } else {
    menu.style.width = "0%";
  }
});
closeMenu.addEventListener("click", () => {
  menu.style.width = "0%";
  checkMenu();
});

// scroll clients boxs
const clientsBoxs = document.querySelector(".clients-track"),
  leftArrow = document.querySelector(".testimonial .left-arrow"),
  rightArrow = document.querySelector(".testimonial .right-arrow");

leftArrow.addEventListener("click", () => {
  let clientBoxWidth = document.querySelector(".client").offsetWidth;
  clientsBoxs.scrollLeft += clientBoxWidth + 16;
});
rightArrow.addEventListener("click", () => {
  let clientBoxWidth = document.querySelector(".client").offsetWidth;
  clientsBoxs.scrollLeft -= clientBoxWidth + 16;
});

// change nav position when scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.style.cssText = "position: fixed !important; background-color: white;";
  } else {
    nav.style.cssText =
      "position: absolute !important; background-color: transparent;";
  }
});
