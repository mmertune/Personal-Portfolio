const burgerMenu = document.querySelector(".burger-menu");
const toggle = document.querySelector(".toggle");
const sideMenu = document.querySelector(".side-menu");

let burgerOpen = false;

window.onresize = function () {
  if (window.innerWidth > 800) {
    sideMenu.style.display = "none";
    burgerMenu.children[0].style.transform = "rotate(0deg)";
    burgerMenu.children[0].style.stroke = "#ffffff";

    burgerMenu.children[1].style.display = "";
    burgerMenu.children[1].style.stroke = "#ffffff";

    burgerMenu.children[2].style.transform = "rotate(0deg)";
    burgerMenu.children[2].style.stroke = "#ffffff";
  }
};
burgerMenu.addEventListener("click", () => {
  if (burgerOpen === false) {
    //open burger menu
    //animate burger to X
    burgerMenu.children[0].style.transform = "rotate(39deg)";
    burgerMenu.children[0].style.transformOrigin = "top left";
    burgerMenu.children[0].style.transitionDuration = "1s";
    burgerMenu.children[0].style.stroke = "#000000";

    burgerMenu.children[1].style.display = "none";
    burgerMenu.children[1].style.transitionDuration = "1s";
    burgerMenu.children[1].style.stroke = "#000000";

    burgerMenu.children[2].style.transform = "rotate(-39deg)";
    burgerMenu.children[2].style.transformOrigin = "bottom left";
    burgerMenu.children[2].style.transitionDuration = "1s";
    burgerMenu.children[2].style.stroke = "#000000";

    // burgerMenu.children.style.stroke = "#000000"
    sideMenu.style.display = "flex";

    burgerOpen = true;
  } else {
    //close burger menu
    //animate X to burger
    burgerMenu.children[0].style.transform = "rotate(0deg)";
    burgerMenu.children[0].style.stroke = "#ffffff";
    burgerMenu.children[0].style.transitionDuration = "1s";

    burgerMenu.children[1].style.display = "";
    burgerMenu.children[1].style.stroke = "#ffffff";
    burgerMenu.children[1].style.transitionDuration = "1s";

    burgerMenu.children[2].style.transform = "rotate(0deg)";
    burgerMenu.children[2].style.stroke = "#ffffff";
    burgerMenu.children[2].style.transitionDuration = "1s";

    sideMenu.style.display = "none";

    burgerOpen = false;
  }
});
