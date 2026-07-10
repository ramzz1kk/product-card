const user = {
  name: "Ramzat",
  age: 20,
  married: false,
  country: "Kyrgyzstan",
  city: "Bishkek",
  email: "ramzat1982@gmail.com",
  job: "Barista"
}
console.log (user)

const car = {
  brand: "Mercedes-Benz",
  model: "W210",
  class: "E",
  Year: "2002",
  color: 'Black',
  transmission: "automatic"
}
car.owner = user;

console.log (car)

function checkMaxSpeed (car) {
  if (!("maxSpeed" in car)) {
    car["maxSpeed"] = 250;
  }
}

checkMaxSpeed (car)

function showProperty (user, name) {
console.log (user [name]);
}
showProperty (user, "name")

const fructs = ["Дыня", "Арбуз", "Гранат", "Апельсин"]


const w210 = {
  Year: 2002,
  color: "black",
  transmission: "automatic"
  }
const camry = {
  Year: 1982,
  color: "white",
  transmission: "automatic"
  }
const k5 = {
  Year: 2010,
  color: "green",
  transmission: "automatic"
  }
const morning = {
  Year: 2004,
  color: "orange",
  transmission: "automatic"
  }
const cars = [w210, camry, k5, morning];

const sequoia = {
  Year: 2000,
  color: "blue",
  transmission: "automatic"
}

cars.push (sequoia)


const prius = {
  Year: 1997,
  color: "blue",
  transmission: "automatiс"
}

const corolla = {
  Year: 1966,
  color: "Solar Red",
  transmission: "mechanical"
}

const ToyataCars = [camry, sequoia, prius, corolla];

const allCars = [...cars, ...ToyataCars];

function SortByYear (allCars) {
  return allCars.map((car) => {
    return {
      ...car,
      isOld: car.Year < 2000
    };
  });
};

const result = SortByYear(allCars);

console.log (result)
