class Box<T = string, U = number> {
  toy: T;
  amounts: U;
  constructor(toy: T, amounts: U) {
    this.toy = toy;
    this.amounts = amounts;
  }
}

class Basket<T = string, U = number> extends Box<T, U> {
  getValue(): string {
    return `You have ${this.toy} and amount is ${this.amounts}`;
  }
}

const boy = new Basket("Car", 2);
console.log(boy.getValue()); // ✅ "You have Car and amount is 2"
