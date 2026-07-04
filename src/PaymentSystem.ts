interface PaymentGateway {
    pay(amount:number):void,
    refund(amount:number):void,
    getTrasactionDetails():string
}
enum status1{
    Done="Done",
    Pending="Pending",
    Rejected = "Rejected"
}
interface PaymentDetail {
    amount:number;
    transactionId:number;
    date:Date;
    status:status1
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

class upiPayment extends Payment {
    constructor(
        payment:PaymentDetail,
        protected readonly upiId:number,
        protected readonly bankName:string
    ) {
        super(payment)
    }

    /**
     * paying the money
     */
    pay():void {
        console.log(`PaymentDone to ${this.bankName} bank and ${this.upiId} upiId of an amount of ${this.payment.amount}`);
    }

    /**
     * Making the refund
     */
    refund():void {
        if(this.payment.status === status1.Done) {
            console.log(`Payment refunded to ${this.bankName} and ${this.upiId}`);
        }else{
            throw new Error("Refund failed because payment never succeeded")
        }
    }

    /**
     * validating the payment
     */
    validatePayment():void{
        if(this.bankName != "" && this.upiId.toString.length > 10 && this.payment.status === status1.Done) {
            console.log("Payment done successfully");
        }else {
            throw new Error("Payment validation failed")
        }
    }

    /**
     * get transaction detail
     */

    receipt():void {
        super.receipt()
        console.log(`Upi Id : ${this.upiId}`);
        console.log(`Bank Name : ${this.bankName}`);
    }
}


const upiPayment1 = new upiPayment({amount:23333,transactionId:453435,date:new Date("12-03-2005"),status:status1.Done},328748723487,"BOI")

upiPayment1.receipt()