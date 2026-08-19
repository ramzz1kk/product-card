import "./homework7.js";
import "./homework8.js";
import "./homework-9.js";
import "./homework-10.js";

import Modal from "./Modal.js";
import Form from "./Form.js";


// Покраска всех карточек

const productItems = document.querySelectorAll(".products__item");
const changeGreenColorAllBtn = document.querySelectorAll(
  ".change-green-all-items-btn",
);
changeGreenColorAllBtn.forEach((item) => {
  item.addEventListener("click", () => {
    productItems.forEach((item) => {
      item.style.backgroundColor = "green";
    });
  });
});

// Покраска одной карточки
const productItem = document.querySelector(".products__item");
const changeYellowColorBtn = document.querySelector(".change-yellow-color-btn");

changeYellowColorBtn.addEventListener("click", () => {
  productItem.style.backgroundColor = "yellow";
});

// Открыть Гугл
const openGoogleBtn = document.querySelector(".open-google-btn");
const URLGoogle = "https://www.google.com";
openGoogleBtn.addEventListener("click", () => {
  window.open(URLGoogle);
});

// Вывод консоль лог
const outputConsoleLogBtn = document.querySelector(".output-console-log-btn");
outputConsoleLogBtn.addEventListener("click", () => {
  outputConsoleLog("Hello, World!");
});

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Сделать так, что бы при наведении на главный заголовок- он выводился в консоль.
const mainTitle = document.querySelector(".catalog__title");
mainTitle.addEventListener("mouseover", () => {
  console.log(mainTitle.textContent);
});

// Кнопка меняющая свой цвет
const changeColorBtn = document.querySelector(".change-color-btn");
changeColorBtn.addEventListener("click", () => {
  changeColorBtn.classList.toggle("change-color-btn");
});

class Car {
  constructor (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  log () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
};
const bmw = new Car("BMW", "X5", 2020);
bmw.log();

class electricCar extends Car {
  constructor (brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
  }
  log () {
    super.log();
    console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
  }
}
const tesla = new electricCar("Tesla", "Cyberteuck", 2022, 100);
tesla.log();

const registrationModal = new Modal("registration-modal");

const registrationBtn = document.querySelector(".registration-form-btn");

registrationBtn.addEventListener("click", () => {
  registrationModal.openModal();
});

const registrationForm = new Form("registration-form");

registrationForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = registrationForm.getFormData();

  const password = data["user-password"];
  const confirmPassword = data["confirm-password"];


  if (!registrationForm.isValid() || password !== confirmPassword) {
    alert("Форма заполнена не корректно");
    return;
  }


  data.createdOn = new Date();

  console.log(data);


  registrationForm.resetForm();

  registrationModal.closeModal();

  alert("Пользователь успешно зарегистрирован!");
});