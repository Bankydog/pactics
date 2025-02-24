"use strict";
class Animal {
    constructor(name) {
        this.animalName = name;
    }
    makeSound() {
        return "";
    }
}
class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}
const dog = new Dog("Buddy"); // ✅ ต้องส่งชื่อสัตว์ตอนสร้าง Object
console.log(dog.makeSound()); // ✅ "Woof!"
