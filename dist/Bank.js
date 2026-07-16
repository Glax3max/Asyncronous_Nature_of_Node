export class BankAccount {
    accountNumber;
    ownerName;
    balance;
    constructor(account, ownerName, balance) {
        this.accountNumber = account;
        this.ownerName = ownerName;
        this.balance = balance;
        console.log(`Hello ${this.ownerName}! welcome onboard 🙏`);
        console.log('====================================');
        console.log(`Your Account number is ${this.accountNumber}`);
        console.log('====================================');
    }
    deposit(amount) {
        if (amount < 0) {
            console.log(`Invalid amount`);
            return;
        }
        this.balance += amount;
        console.log(`${amount} has been successfully deposited in your account`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient balance`);
        }
        else {
            this.balance -= amount;
            console.log(`${amount} amount has been withdrawn from your account`);
        }
    }
    checkBalance() {
        console.log(`Your current balance is ${this.balance}`);
    }
}
//# sourceMappingURL=Bank.js.map