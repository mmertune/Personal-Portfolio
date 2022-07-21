const burgerMenu = document.querySelector(".burger-menu");
const toggle = document.querySelector(".toggle");
let burgerOpen = false;

burgerMenu.addEventListener("click", () => {
  if (burgerOpen === false) {
    //open burger menu
    //animate burger to X
    burgerMenu.children[0].style.transform = "rotate(39deg)";
    burgerMenu.children[0].style.transformOrigin = "top left";
    burgerMenu.children[0].style.transitionDuration = "1s";

    burgerMenu.children[1].style.display = "none";
    burgerMenu.children[1].style.transitionDuration = "1s";

    burgerMenu.children[2].style.transform = "rotate(-39deg)";
    burgerMenu.children[2].style.transformOrigin = "bottom left";
    burgerMenu.children[2].style.transitionDuration = "1s";

    burgerOpen = true;
  } else {
    //close burger menu
    //animate X to burger
    burgerMenu.children[0].style.transform = "rotate(0deg)";
    burgerMenu.children[1].style.display = "";
    burgerMenu.children[2].style.transform = "rotate(0deg)";

    burgerOpen = false;
  }
});
