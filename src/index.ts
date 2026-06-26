import { BankAccount } from "./Bank";
import { Calculator } from "./Calculator";


const Bank1 = new BankAccount(787,"Raju",88)
Bank1.checkBalance()
Bank1.deposit(43)
Bank1.withdraw(32)


const Calc = new Calculator();
console.log(Calc.add(73,54));
Calc.clear();
console.log(Calc.subtract(43,23));
Calc.clear();
console.log(Calc.multiply(43,23));
Calc.clear();
console.log(Calc.divide(43,23));
Calc.clear();