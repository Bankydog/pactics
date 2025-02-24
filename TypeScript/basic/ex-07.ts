class Person<T = string, U = number> {
  name: T;
  age: U;

  constructor(name: T, age: U) {
    this.name = name;
    this.age = age;
  }

  @sayHiDecorator
  sayHi(hi: string): string {
    return "";
  }
}

function sayHiDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const result = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`${args} from decorator!`);
    return result.apply(this, args); // ✅ คืนค่าจากเมธอดเดิม
  };

  return descriptor; // ✅ ต้อง return descriptor กลับไป
}

const p = new Person("Bank", 30);
p.sayHi("Hellossss");
