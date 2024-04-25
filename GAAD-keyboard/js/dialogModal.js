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
  closeBtn.addEventListener("click", () => {
    console.warn("close");
    modal.close();
  });
  if (top == false) {
    console.warn("bottom");
    modal.append(closeBtn);
  } else {
    console.warn("top");
    modal.prepend(closeBtn);
  }
};

export { openModal, addCloseButton };
