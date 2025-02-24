// สร้าง Decorator สำหรับการตรวจสอบการฝากเงิน
function validateAmount(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (amount: number, ...args: any[]) {
    if (amount <= 0) {
      throw new Error(`${propertyKey} amount must be greater than zero`);
    }
    return originalMethod.apply(this, [amount, ...args]);
  };

  return descriptor;
}

// คลาส BankAccount
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }

  @validateAmount
  deposit(amount: number): number {
    // เปลี่ยนเป็นคืนค่าเป็น number
    this.balance += amount;
    console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    return this.balance; // คืนค่าบalance หลังการฝาก
  }

  @validateAmount
  withdraw(amount: number): number {
    // เปลี่ยนเป็นคืนค่าเป็น number
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
    console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
    return this.balance; // คืนค่าบalance หลังการถอน
  }
}

// ตัวอย่างการใช้งาน
const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.deposit(500); // Deposited: 500. New balance: 1500
myAccount.withdraw(200); // Withdrew: 200. New balance: 1300

// ทดสอบการฝากและถอนที่ไม่ถูกต้อง
try {
  myAccount.deposit(-100); // Error: deposit amount must be greater than zero
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

try {
  myAccount.withdraw(2000); // Error: Insufficient funds
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}
