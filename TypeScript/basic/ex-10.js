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
// สร้าง Decorator สำหรับการตรวจสอบการฝากเงิน
function validateAmount(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (amount, ...args) {
        if (amount <= 0) {
            throw new Error(`${propertyKey} amount must be greater than zero`);
        }
        return originalMethod.apply(this, [amount, ...args]);
    };
    return descriptor;
}
// คลาส BankAccount
class BankAccount {
    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        // เปลี่ยนเป็นคืนค่าเป็น number
        this.balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        return this.balance; // คืนค่าบalance หลังการฝาก
    }
    withdraw(amount) {
        // เปลี่ยนเป็นคืนค่าเป็น number
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        return this.balance; // คืนค่าบalance หลังการถอน
    }
}
__decorate([
    validateAmount,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], BankAccount.prototype, "deposit", null);
__decorate([
    validateAmount,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], BankAccount.prototype, "withdraw", null);
// ตัวอย่างการใช้งาน
const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // Deposited: 500. New balance: 1500
myAccount.withdraw(200); // Withdrew: 200. New balance: 1300
// ทดสอบการฝากและถอนที่ไม่ถูกต้อง
try {
    myAccount.deposit(-100); // Error: deposit amount must be greater than zero
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
}
try {
    myAccount.withdraw(2000); // Error: Insufficient funds
}
catch (e) {
    if (e instanceof Error) {
        console.error(e.message);
    }
}
