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

