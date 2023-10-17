class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }
  drive(): void {
    console.log(`Chugga Chugga`);
  }
  protected honk(): void {
    console.log(`BeeB`);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
    this.wheels = wheels;
  }
}

const c = new Car(4, "red");
