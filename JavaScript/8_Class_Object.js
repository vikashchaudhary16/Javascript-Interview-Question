class Car {
  constructor(name, make) {
    this.name = name;
    this.make = make;
  }
  car_Statement(){
      return `My car is ${this.make} ${this.name}`
  }
}

let myCar1 = new Car("Jetta", "VW");
console.log(myCar1.name)
console.log(myCar1.car_Statement())
