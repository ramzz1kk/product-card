class Drinks {
  #temperature;

  constructor(name, price, volume, temperature) {
    this.name = name;
    this.price = price;
    this.volume = volume;
    this.#temperature = temperature;
  }

  getInfo() {
    return `Name: ${this.name}, Price: ${this.price}, Volume: ${this.volume}, Temperature: ${this.#temperature}`;
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #prepareDrink() {
    console.log(`${this.name} готовится...`);
  }

  serve() {
    this.#prepareDrink();
    console.log(`${this.name} подан`);
  }
}

class Coffee extends Drinks {
  constructor(name, price, volume, temperature, grainType, milkType) {
    super(name, price, volume, temperature);
    this.grainType = grainType;
    this.milkType = milkType;
  }

  getInfo() {
    return (
      super.getInfo() +
      ` GrainType: ${this.grainType}, MilkType: ${this.milkType}`
    );
  }
}

class Lemonades extends Drinks {
  constructor(name, price, volume, temperature, syrup) {
    super(name, price, volume, temperature);
    this.syrup = syrup;
  }

  getInfo() {
    return super.getInfo() + ` Syrup: ${this.syrup}`;
  }
}

class Tea extends Drinks {
  constructor(name, price, volume, temperature, teaType) {
    super(name, price, volume, temperature);
    this.teaType = teaType;
  }

  getInfo() {
    return super.getInfo() + ` TeaType: ${this.teaType}`;
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Cafe: ${this.name}, Location: ${this.location}`;
  }

  orderDrink(drink) {
    drink.serve();
  }
}

const cappuccino = new Coffee("cappuccino", 250, "350ml", 65, "arabica", "coconut");

const mojito = new Lemonades("Mojito", 350, "500ml", 10, "mojito");

const blackTea = new Tea("Черный чай", 180, "350ml", 90, "Черный");

const cafe = new Cafe("Doza coffee", "Совмина 7/1");

console.log(cafe.getInfo());

cafe.orderDrink(cappuccino);
cafe.orderDrink(mojito);
cafe.orderDrink(blackTea);