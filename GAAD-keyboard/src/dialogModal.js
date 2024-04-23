const openModal = () => {
  const modals = Array.from(document.querySelectorAll(".modal"));
  modals.forEach((modal) => {
    const modalBtn = modal.previousElementSibling;
    modalBtn.addEventListener("click", () => {
      modal.showModal();
    });
  });
};

const addCloseButton = (modal, top = true) => {
  const closeBtn = document.getElementById("close-modal");
  if (top == false) {
    modal.append(closeBtn);
  } else {
    modal.prepend(closeBtn);
  }
  closeBtn.addEventListener("click", () => {
    modal.close();
  });
};

export { openModal, addCloseButton };
