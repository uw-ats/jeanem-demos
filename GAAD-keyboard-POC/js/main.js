import { ratings } from "./ratings.js";
import { openModal, closeArticleBtn } from "./dialogModal.js";

const details = () => {
  details.addEventListener("toggle", function () {
    summary.setAttribute("aria-expanded", details.open);
  });
};

const helpBtnSidebar = document.getElementById("sidebar-focus");
const helpBtnTips = document.getElementById("tips-focus");

helpBtnSidebar.addEventListener("click", () => {
  document.querySelector("aside").classList.add("enable-container-focus");
});

helpBtnTips.addEventListener("click", () => {
  document.querySelector("#tips-button").classList.add("enable-element-focus");
});

/* article modal close button */
closeArticleBtn();

const skipLink = document.getElementById("skip-link");
const helpBtnSkipLink = document.getElementById("skip-link-focus");

skipLink.style.display = "none";

helpBtnSkipLink.addEventListener("click", () => {
  skipLink.style.display = "block";
  skipLink.classList.add("enable-element-focus");
  skipLink.focus();
});

document.addEventListener("DOMContentLoaded", () => {
  openModal();
  ratings();
});
