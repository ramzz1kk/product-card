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
