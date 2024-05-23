export function ratings() {
  const checkboxes = Array.from(document.querySelectorAll(".checkbox-input"));
  const updateSiblingStars = (selectedStarIndex) => {
    checkboxes.forEach((checkbox, index) => {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);
      const icon = label.querySelector("i");
      if (index < selectedStarIndex) {
        icon.className = "bi bi-star-fill";
      } else if (index > selectedStarIndex) {
        icon.className = "bi bi-star";
      }
    });
  };

  const selectStar = () => {
    checkboxes.forEach((checkbox, index) => {
      const label = document.querySelector(`label[for="${checkbox.id}"]`);
      const icon = label.querySelector("i");
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          icon.className = "bi bi-star-fill";
        } else {
          icon.className = "bi bi-star";
        }
        updateSiblingStars(index);
      });
    });
  };
  selectStar();
}
