class Animal {
  private animalName: string; // ✅ ใช้ `string` แทน `String`

  constructor(name: string) {
    this.animalName = name;
  }

  public makeSound() {
    return "";
  }
}

class Dog extends Animal {
  public makeSound(): string {
    return "Woof!";
  }
}

const dog = new Dog("Buddy"); // ✅ ต้องส่งชื่อสัตว์ตอนสร้าง Object

console.log(dog.makeSound()); // ✅ "Woof!"
