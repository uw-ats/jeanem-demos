const openModal = () => {
  const modals = Array.from(document.querySelectorAll(".modal"));
  modals.forEach((modal) => {
    const modalBtn = modal.previousElementSibling;
    modalBtn.addEventListener("click", () => {
      modal.showModal();
    });
  });
};

const closeArticleBtn = () => {
  const articleModal = document.getElementById("article");
  const closeBtn = document.getElementById("close-modal");
  const helpBtnCloseFirstTab = document.getElementById("close-first-focus");
  const helpBtnModalFocus = document.getElementById("add-modal-focus");

  closeBtn.addEventListener("click", () => {
    articleModal.close();
  });

  helpBtnCloseFirstTab.addEventListener("click", () => {
    // articleModal.prepend(document.getElementById(closeBtn));
    articleModal.insertBefore(closeBtn, articleModal.firstChild);
    // closeBtn.classList.add("close-btn-top");
    // closeBtn.classList.remove("close-btn-bottom");
  });
  helpBtnModalFocus.addEventListener("click", () => {
    articleModal.classList.add("enable-container-focus");
  });
};

export { openModal, closeArticleBtn };
