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
    transactionId:number;
    date:Date;
    status:PaymentStatus
}

function generateRandon10digit():number {
    const arr :number[]= [1,2,3,4,5,6,7,8,9,0]
    let num:number = 0
    for(let i = 0 ; i < 9 ;i++) {
        num *= 10;
        num += arr[Math.floor(Math.random()*10)]
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
     * paying the money
     */
    pay(amount:number):void {
        this.payment.amount = amount;
        this.validatePayment();
        this.payment.transactionId = generateRandon10digit();
        this.payment.date = new Date()
        this.payment.status = PaymentStatus.Done
        console.log("Payment succeed")
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
     * get transaction detail
     */
    getTransactionDetails():string {
        if(this.payment.status == PaymentStatus.Pending) {
            return `Status is not initialed`
        }
        super.receipt()
        console.log(`Upi Id : ${this.upiId}`);
        console.log(`Bank Name : ${this.bankName}`);
        return `Upi Id: ${this.upiId} is used as the transaction destination and the amount is ${this.payment.amount}`
    }
}

const intialPaymentData:PaymentDetail ={
    amount:-1,
    transactionId:-1,
    date:new Date(),
    status:PaymentStatus.NotInitialted
}

const upiPayment1 = new UpiPayment(intialPaymentData,"328748@23487","BOI")

upiPayment1.pay(485774);
console.log(upiPayment1.getTransactionDetails());