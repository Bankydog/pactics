"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(hi) {
        return "";
    }
}
__decorate([
    sayHiDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], Person.prototype, "sayHi", null);
function sayHiDecorator(target, propertyKey, descriptor) {
    const result = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`${args} from decorator!`);
        return result.apply(this, args); // ✅ คืนค่าจากเมธอดเดิม
    };
    return descriptor; // ✅ ต้อง return descriptor กลับไป
}
const p = new Person("Bank", 30);
p.sayHi("Hellossss");
