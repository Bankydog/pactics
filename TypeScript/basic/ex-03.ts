interface Person<T = string, U = number> {
  name: T;
  age: U;
}

const person1: Person<string, number> = { name: "Bank", age: 30 };
