interface PaymentGateway {
    pay(amount:number):void,
    refund():void,
    getTransactionDetails():string
}
enum PaymentStatus{
    Done="Done",
    Pending="Pending",
    Rejected = "Rejected",
    Refunded = "Refunded",
    NotInitialted = "Not Initiated"
}
interface PaymentDetail {
    amount:number;
    transactionId:string;
    date:Date;
    status:PaymentStatus
}

function generateRandon10digit():string {
    const arr :string[]= ["1","2","3","4","5","6","7","8","9","0"]
    let num:string = ""
    for(let i = 0 ; i < 10 ;i++) {
        let char:string = arr[Math.floor(Math.random()*10)];
        if(i == 0) {
            while(char === "0") {
                char = arr[Math.floor(Math.random()*10)];
            }
        }
        num += char; 
    }
    return num;
}

abstract class Payment{
    constructor(
        protected payment:PaymentDetail
    ){}

    /**
     * Print receipt
     */

    receipt():void {
        console.log('====================================');
        console.log("Receipt:");
        console.log('====================================');
        console.log(`Amount:${this.payment.amount}`);
        console.log(`TransactionId:${this.payment.transactionId}`);
        console.log(`Date:${this.payment.date}`);
        console.log(`Status:${this.payment.status}`);
    }

    /**
     * 
     * Payment Operations
     */
    pay(amount:number) {
        this.payment.amount = amount;
        this.validatePayment();
        this.payment.transactionId = generateRandon10digit();
        this.payment.status = PaymentStatus.Done;
        this.payment.date =new Date();
    }

    /**
     * validate payment abstract method
     */
    abstract validatePayment():void;

}

class UpiPayment 
    extends Payment
    implements PaymentGateway {
    constructor(
        payment:PaymentDetail,
        protected readonly upiId:string,
        protected readonly bankName:string
    ) {
        super(payment)
    }

    /**
     * Making the refund
     */
    refund():void {
        if(this.payment.status !== PaymentStatus.Done) 
            throw new Error("Refund can't be initiated") 
        this.payment.status = PaymentStatus.Refunded;
        console.log("Refund successfully done")
    }

    /**
     * validating the payment
     */
    validatePayment():void{
        if(this.bankName === "")
            throw new Error("Not a valid bank")
        if(!this.upiId.includes("@")) 
            throw new Error("Not a valid upi Id")
        if(this.payment.amount <= 0) 
            throw new Error("Please enter a valid number")

        console.log("Payment validated")
    }

    /**
     * Print TransactionalDetail
     */
    printTransactionDetail():void {
        if(this.payment.status == PaymentStatus.Pending) {
            throw new Error(`Status is not initialed`)
        }
        super.receipt()
        console.log(`Upi Id : ${this.upiId}`);
        console.log(`Bank Name : ${this.bankName}`);
    }

    /**
     * get transaction detail
     */
    getTransactionDetails():string {
        if(this.payment.status == PaymentStatus.NotInitialted) {
            throw new Error(`Status is not initialed`)
        }
        return `Upi Id: ${this.upiId} is used as the transaction destination and the amount is ${this.payment.amount}`
    }
}

class CreditCardPayment
    extends Payment
    implements PaymentGateway {
        constructor(
            payment:PaymentDetail,
            private readonly cardNumber:number,
            private readonly bankName:string,
            private readonly cvv:number,
            private readonly pin:number,
        ){
            super(payment)
        }

        /**
         * Refunding the money
         */
        refund():void{
            this.validatePayment()
            this.payment.status = PaymentStatus.Refunded;
            this.payment.date = new Date();
            console.log("Payment refunded")
        }

        /**
         * Validating the payment
         */

        validatePayment():void {
            if(this.payment.amount <= 0 )
                throw new Error("Amount should be greater than 0")
            if(this.cardNumber.toString().length < 12)
                throw new Error("Card number not valid")
            if(this.cvv.toString().length != 3)
                throw new Error("Invalid CVV")
            if(this.bankName === "")
                throw new Error("Invalid bank number")
            if(this.pin.toString().length !=  6)
                throw new Error("Invalid pin")

            console.log("Payment is validated")
        }

        /**
         * Printing the transaction detail
         */
        printTransactionDetail():void {
        if(this.payment.status == PaymentStatus.Pending) {
            throw new Error(`Status is not initialed`)
        }
        super.receipt()
        console.log(`Card Number : ${this.cardNumber}`);
        console.log(`Bank Name : ${this.bankName}`);
        }
        /**
         * Getting the transaction detail
         */
        getTransactionDetails():string {
            if(this.payment.status === PaymentStatus.NotInitialted) {
                throw new Error("Payment not initiated");
            }
            return `Transaction done and this time it is a ${this.payment.status} operation`;
        }
    }

const intialPaymentData:PaymentDetail ={
    amount:-1,
    transactionId:"",
    date:new Date(),
    status:PaymentStatus.NotInitialted
}

const upiPayment1 = new UpiPayment(intialPaymentData,"328748@23487","BOI")
const cardPayment = new CreditCardPayment(intialPaymentData,890764527628,"SBI",874,349294)

cardPayment.pay(348743);
cardPayment.refund();
cardPayment.printTransactionDetail();
console.log(cardPayment.getTransactionDetails())
// upiPayment1.pay(485774);
// upiPayment1.printTransactionDetail();
// console.log(upiPayment1.getTransactionDetails());
