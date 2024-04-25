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

const init = () => {
  selectStar();
};

init();
