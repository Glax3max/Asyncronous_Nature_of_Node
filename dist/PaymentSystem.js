"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Done"] = "Done";
    PaymentStatus["Pending"] = "Pending";
    PaymentStatus["Rejected"] = "Rejected";
    PaymentStatus["Refunded"] = "Refunded";
    PaymentStatus["NotInitialted"] = "Not Initiated";
})(PaymentStatus || (PaymentStatus = {}));
function generateRandon10digit() {
    const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let num = "";
    for (let i = 0; i < 10; i++) {
        let char = arr[Math.floor(Math.random() * 10)];
        if (i == 0) {
            while (char === "0") {
                char = arr[Math.floor(Math.random() * 10)];
            }
        }
        num += char;
    }
    return num;
}
class Payment {
    payment;
    constructor(payment) {
        this.payment = payment;
    }
    receipt() {
        console.log('====================================');
        console.log("Receipt:");
        console.log('====================================');
        console.log(`Amount:${this.payment.amount}`);
        console.log(`TransactionId:${this.payment.transactionId}`);
        console.log(`Date:${this.payment.date}`);
        console.log(`Status:${this.payment.status}`);
    }
    refund() {
        if (this.payment.status !== PaymentStatus.Done)
            throw new Error("Refund can't be initiated");
        this.validatePayment();
        this.payment.status = PaymentStatus.Refunded;
        this.payment.date = new Date();
        console.log("Payment refunded");
    }
    pay(amount) {
        this.payment.amount = amount;
        this.validatePayment();
        this.payment.transactionId = generateRandon10digit();
        this.payment.status = PaymentStatus.Done;
        this.payment.date = new Date();
    }
    getTransactionDetails() {
        if (this.payment.status === PaymentStatus.NotInitialted) {
            throw new Error("Payment not initiated");
        }
        return `Transaction done and this time it is a ${this.payment.status} operation`;
    }
}
class UpiPayment extends Payment {
    upiId;
    bankName;
    constructor(payment, upiId, bankName) {
        super(payment);
        this.upiId = upiId;
        this.bankName = bankName;
    }
    validatePayment() {
        if (this.bankName === "")
            throw new Error("Not a valid bank");
        if (!this.upiId.includes("@"))
            throw new Error("Not a valid upi Id");
        if (this.payment.amount <= 0)
            throw new Error("Please enter a valid number");
        console.log("Payment validated");
    }
    printTransactionDetail() {
        if (this.payment.status == PaymentStatus.Pending) {
            throw new Error(`Status is not initialed`);
        }
        super.receipt();
        console.log(`Upi Id : ${this.upiId}`);
        console.log(`Bank Name : ${this.bankName}`);
    }
}
class CreditCardPayment extends Payment {
    cardNumber;
    bankName;
    cvv;
    pin;
    constructor(payment, cardNumber, bankName, cvv, pin) {
        super(payment);
        this.cardNumber = cardNumber;
        this.bankName = bankName;
        this.cvv = cvv;
        this.pin = pin;
    }
    validatePayment() {
        if (this.payment.amount <= 0)
            throw new Error("Amount should be greater than 0");
        if (this.cardNumber.toString().length < 12)
            throw new Error("Card number not valid");
        if (this.cvv.toString().length != 3)
            throw new Error("Invalid CVV");
        if (this.bankName === "")
            throw new Error("Invalid bank number");
        if (this.pin.toString().length != 6)
            throw new Error("Invalid pin");
        console.log("Payment is validated");
    }
    printTransactionDetail() {
        if (this.payment.status == PaymentStatus.Pending) {
            throw new Error(`Status is not initialed`);
        }
        super.receipt();
        console.log(`Card Number : ${this.cardNumber}`);
        console.log(`Bank Name : ${this.bankName}`);
    }
}
const intialPaymentData = {
    amount: -1,
    transactionId: "",
    date: new Date(),
    status: PaymentStatus.NotInitialted
};
const upiPayment1 = new UpiPayment(intialPaymentData, "328748@23487", "BOI");
const cardPayment = new CreditCardPayment(intialPaymentData, "890764527628", "SBI", 874, 349294);
cardPayment.pay(348743);
cardPayment.refund();
cardPayment.printTransactionDetail();
console.log(cardPayment.getTransactionDetails());
//# sourceMappingURL=PaymentSystem.js.map