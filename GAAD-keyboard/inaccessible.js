document.getElementById("dropbtn").onclick = function () {
  document.getElementById("dropdown-content").classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const checkboxes = Array.from(document.querySelectorAll(".checkbox-input"));
console.warn(checkboxes);
checkboxes.forEach((checkbox) => {
  const label = document.querySelector(`label[for="${checkbox.id}"]`);
  const icon = label.querySelector("i");
  console.warn(label);
  console.warn(icon);
  checkbox.addEventListener("change", function () {
    console.warn(this.checked);
    if (this.checked) {
      icon.className = "bi bi-star-fill";
    } else {
      icon.className = "bi bi-star";
    }
  });
});
