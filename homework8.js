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

function showPropertyObject (user, name) {
  console.log (user [name]);
}
  showPropertyObject (user, "name")

const fructs = ["Дыня", "Арбуз", "Гранат", "Апельсин"]


const cars = [ 
  w210 = {
    Year: 2002,
    color: "black",
    transmission: "automatic"
  },
  camry = {
    Year: 1982,
    color: "white",
    transmission: "automatic"
  },
  k5 = {
    Year: 2010,
    color: "green",
    transmission: "automatic"
  },
  morning = {
    Year: 2004,
    color: "orange",
    transmission: "automatic"
  }
];

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

const toyataCars = [camry, sequoia, prius, corolla];

const allCars = [...cars, ...toyataCars];

function sortByYear (allCars) {
  return allCars.map((car) => {
    return {
      ...car,
      isOld: car.Year < 2000
    };
  });
};

const result = sortByYear(allCars);

console.log (result)
