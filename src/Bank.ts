// use {ts-node src/Bank} in the terminal from the asyncronous_nature... directory
export class BankAccount{
    private accountNumber:number;
    private ownerName:string;
    private balance:number;

    constructor(account:number,ownerName:string,balance:number) {
        this.accountNumber = account;
        this.ownerName  = ownerName;
        this.balance = balance;
        console.log(`Hello ${this.ownerName}! welcome onboard 🙏`)
        console.log('====================================');
        console.log(`Your Account number is ${this.accountNumber}`);
        console.log('====================================');
                
    }

    // methods
    deposit(amount:number) {
        if(amount < 0) {
            console.log(`Invalid amount`)
            return;
        }
        this.balance += amount;
        console.log(`${amount} has been successfully deposited in your account`)
    }

    withdraw(amount:number) {
        if(amount > this.balance) {
            console.log(`Insufficient balance`);
        }else {
            this.balance -= amount;
            console.log(`${amount} amount has been withdrawn from your account`);
        }
    }

    checkBalance() {
        console.log(`Your current balance is ${this.balance}`)
    }

}


// const Bank1 = new BankAccount(777,"Raj Shah",0)
// Bank1.checkBalance()
// Bank1.deposit(43)
// Bank1.withdraw(22)