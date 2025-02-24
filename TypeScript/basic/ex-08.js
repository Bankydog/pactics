"use strict";
class Box {
    constructor(toy, amounts) {
        this.toy = toy;
        this.amounts = amounts;
    }
}
class Basket extends Box {
    getValue() {
        return `You have ${this.toy} and amount is ${this.amounts}`;
    }
}
const boy = new Basket("Car", 2);
console.log(boy.getValue()); // ✅ "You have Car and amount is 2"
