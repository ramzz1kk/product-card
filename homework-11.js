const emailForm = document.querySelector("#email-form");

function getFormData(form) {
  const formData = new FormData(form);
  return Object.fromEntries(formData.entries());
}
emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const data = getFormData(form);
  console.log(data);
});

const modal = document.querySelector(".modal");
const registrationFormBtn = document.querySelector(".registration-form-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

closeModalBtn.onclick = closeModal;
registrationFormBtn.onclick = openModal;

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

let user;
const regForm = document.querySelector(".registration-form");
regForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = document.querySelector("#user-password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  if (!regForm.checkValidity() || password !== confirmPassword) {
    alert("Форма заполнена не коректно");
    return;
  }
  user = getFormData(regForm);
  user.createdOn = new Date();
  console.log(user);
  modal.style.display = "none";
  alert("Пользователь успешно зарегистрирован!");
});
