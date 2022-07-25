const burgerMenu = document.querySelector(".burger-menu, .burger-menu2");
const toggle = document.querySelector(".toggle");
const sideMenu = document.querySelector(".side-menu");
const sideMenuLinks = document.querySelectorAll(".aside-nav-links a")

const burgerchild1 = burgerMenu.children[0].style;
const burgerchild2 = burgerMenu.children[1].style;
const burgerchild3 = burgerMenu.children[2].style;

let burgerOpen = false;

// hide side menu when resizing
window.onresize = function () {
  if (window.innerWidth > 800) {
    sideMenu.style.display = "none";
    burgerchild1.transform = "rotate(0deg)";
    burgerchild1.stroke = "#ffffff";

    burgerchild2.display = "";
    burgerchild2.stroke = "#ffffff";

    burgerchild3.transform = "rotate(0deg)";
    burgerchild3.stroke = "#ffffff";

    burgerOpen = false
  }
};
burgerMenu.addEventListener("click", () => {
  if (burgerOpen === false) {
    //open burger menu & animate burger to X

    burgerchild1.transform = "rotate(39deg)";
    burgerchild1.transformOrigin = "top left";
    burgerchild1.transitionDuration = "1s";
    burgerchild1.stroke = "#000000";

    burgerchild2.display = "none";
    burgerchild2.transitionDuration = "1s";
    burgerchild2.stroke = "#000000";

    burgerchild3.transform = "rotate(-39deg)";
    burgerchild3.transformOrigin = "bottom left";
    burgerchild3.transitionDuration = "1s";
    burgerchild3.stroke = "#000000";

    sideMenu.style.display = "flex";
    burgerOpen = true;
  } else {
    //close burger menu & animate X to burger
    burgerchild1.transform = "rotate(0deg)";
    burgerchild1.stroke = "#ffffff";
    burgerchild1.transitionDuration = "1s";

    burgerchild2.display = "";
    burgerchild2.stroke = "#ffffff";
    burgerchild2.transitionDuration = "1s";

    burgerchild3.transform = "rotate(0deg)";
    burgerchild3.stroke = "#ffffff";
    burgerchild3.transitionDuration = "1s";

    sideMenu.style.display = "none";
    burgerOpen = false;
  }
});

sideMenuLinks.forEach((link)=>{
link.addEventListener("click", ()=>{
  sideMenu.style.display = "none";
  burgerchild1.transform = "rotate(0deg)";
  burgerchild1.stroke = "#ffffff";

  burgerchild2.display = "";
  burgerchild2.stroke = "#ffffff";

  burgerchild3.transform = "rotate(0deg)";
  burgerchild3.stroke = "#ffffff";

  burgerOpen = false
})
})
