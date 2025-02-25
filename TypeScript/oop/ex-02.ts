class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    if (initialBalance < 0) {
      throw new Error("Invilid balance");
    }
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(amount: number = 500): void {
    this.balance = amount;
  }
}

const myAccount = new BankAccount(1000);
console.log(myAccount.getBalance()); // 1000
myAccount.setBalance(1500);
console.log(myAccount.getBalance()); // 1500
myAccount.setBalance();
console.log(myAccount.getBalance()); // 500
myAccount.setBalance(-100); // Error: Invalid balance
