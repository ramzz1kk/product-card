// 1
function outputMessage (temp = "X", city = "Y") {
  console.log (`Температура в городе ${city} составляет ${temp} градусов`);
}
outputMessage ();

// 2
const SPEED_OF_LIGHT = (299792458);
function compareSpeed (speed) {
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
compareSpeed (299792458);

// 3

const productName = "Iphone";
const productPrice = 1000;

function compareBudget (currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретен. Спасибо за покупку!`);
  } else {
    const shortage = productPrice - currentBudget;
    console.log(
      `Вам не хватает ${shortage}$, пополните баланс`
    );
  }
}

compareBudget (1500);

// 4
function outputConsoleLog () {
}

// 5
const nomer1 = 1;
let nomer2 = 2;
var nomer3= 3;