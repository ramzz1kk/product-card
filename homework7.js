// 1
function tempImSity (temp = "X", city = "Y") {
  console.log (`Температура в городе ${city} составляет ${temp} градусов`);
}
tempImSity ();

// 2
const SPEED_OF_LIGHT = (299792458);
function  speedСomparison (speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log ("Сверхсветовая скорость")
  }
  else if (speed === SPEED_OF_LIGHT) {
    console.log ("Скорость света")
  }
  else {
    console.log ("Субсветовая скорость")
  }
}
speedСomparison (299792458);

// 3

const productName = "Iphone";
const productPrice = 1000;

function budget(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const shortage = productPrice - currentBudget;
    console.log(
      `Вам не хватает ${shortage}$, пополните баланс`
    );
  }
}

budget(1500);

// 4
function productInfo() {
}

// 5
const nomer1 = 1;
let nomer2 = 2;
var nomer3= 3;