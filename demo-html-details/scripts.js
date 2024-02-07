let btnToggleDetailsBasic = document.getElementById("ccg_btn-open-basic");
let basicRecsContainer = document.getElementById("ccg_recommendations-basic");
let toggleState = "false";

btnToggleDetailsBasic.setAttribute("aria-pressed", "false");

function toggleAllDetails(container) {
  let detailElements = container.querySelectorAll(".ccg_detail");

  if (toggleState === "true") {
    btnToggleDetailsBasic.setAttribute("aria-pressed", "false");
    toggleState = "false";
  } else {
    btnToggleDetailsBasic.setAttribute("aria-pressed", "true");
    toggleState = "true";
  }

  console.warn(toggleState);
  detailElements.forEach(function (detail) {
    if (toggleState === "false") {
      detail.removeAttribute("open");
    } else if (toggleState === "true") {
      detail.setAttribute("open", "true");
    }
  });
}

btnToggleDetailsBasic.addEventListener("click", function () {
  toggleAllDetails(basicRecsContainer);
});
