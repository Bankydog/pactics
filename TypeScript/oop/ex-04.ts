interface Animal {
  makeSound(): void;
}

class Dog implements Animal {
  makeSound(): string {
    return "Woof";
  }
}

const dog = new Dog();
dog.makeSound();
console.log(dog.makeSound());
