class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);

    this.closeOnClickBtn();
  }

  openModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  isOpen() {
    return this.modal.style.display === "flex";
  }

  closeOnClickBtn() {
    const closeBtn = this.modal.querySelector(".close-modal-btn");

    closeBtn.addEventListener("click", () => {
      this.closeModal();
    });
  }
}

export default Modal;