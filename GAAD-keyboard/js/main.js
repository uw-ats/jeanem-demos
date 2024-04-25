import { ratings } from "./ratings.js";
import { openModal, addCloseButton } from "./dialogModal.js";

const details = () => {
  details.addEventListener("toggle", function () {
    summary.setAttribute("aria-expanded", details.open);
  });
};

const sideBarFocus = document.getElementById("sidebar-focus");
const tipsFocus = document.getElementById("tips-focus");

sideBarFocus.addEventListener("click", () => {
  document.querySelector("aside").classList.add("enable-container-focus");
});

tipsFocus.addEventListener("click", () => {
  document.querySelector("#tips-button").classList.add("enable-element-focus");
});

/* TODO: get close button to work right */
const secondModal = document.getElementById("article");
const closeFirstFocus = document.getElementById("close-first-focus");
const closeFocus = document.getElementById("close-focus");

closeFirstFocus.addEventListener("click", () => {
  addCloseButton(secondModal, false);
});
closeFocus.addEventListener("click", () => {
  addCloseButton(secondModal, true);
  secondModal.classList.add("enable-container-focus");
});

const skipLink = document.getElementById("skip-link");
const skipLinkFocus = document.getElementById("skip-link-focus");

skipLink.style.display = "none";

skipLinkFocus.addEventListener("click", () => {
  skipLink.style.display = "block";
  skipLink.classList.add("enable-element-focus");
  skipLink.focus();
});

document.addEventListener("DOMContentLoaded", () => {
  openModal();
  ratings();
});
