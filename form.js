class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getFormData() {
    const formData = new FormData(this.form);

    return Object.fromEntries(formData.entries());
  }

  isValid() {
    return this.form.checkValidity();
  }

  resetForm() {
    this.form.reset();
  }
}

export default Form;