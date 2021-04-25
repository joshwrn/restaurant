import { home } from "/src/home.js";
import { menu } from "/src/menu.js";

const nav = () => {
  createLeft();
  createRight();
  clickNav();
};

const header = document.getElementById("header");
const leftHeader = document.createElement("div");

const createLeft = () => {
  const navList = ` <ul class="nav-links">
<li><a data-page="home" class="nav-item" href="#">Home</a></li>
<li><a data-page="menu" class="nav-item" href="#">Menu</a></li>
<li><a data-page="about" class="nav-item" href="#">About</a></li>
</ul>`;
  const range = document.createRange();
  range.selectNode(header);
  const listFragment = range.createContextualFragment(navList);
  leftHeader.appendChild(listFragment);
  header.appendChild(leftHeader);
};

const createRight = () => {
  const rightDiv = document.createElement("div");
  rightDiv.setAttribute("id", "header-right-side");
  const navList = `<i id="language-icon" class="material-icons-outlined">
  language</i>`;
  const range = document.createRange();
  range.selectNode(header);
  const listFragment = range.createContextualFragment(navList);
  rightDiv.appendChild(listFragment);
  header.appendChild(rightDiv);
};

const clickNav = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".nav-item")) {
      let choice = e.target.getAttribute("data-page");
      const content = document.getElementById("content");
      if (choice == "menu") {
        content.innerHTML = "";
        menu();
        console.log("menu");
      } else if (choice == "home") {
        content.innerHTML = "";
        home();
        console.log("home");
      } else if (choice == "about") {
        console.log("no about function");
      }
    }
  });
};
export { nav };
