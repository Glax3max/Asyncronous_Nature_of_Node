interface PaymentGateway {
    pay(amount:number):void,
    refund():void,
    getTrasactionDetails():string
}
enum PaymentStatus{
    Done="Done",
    Pending="Pending",
    Rejected = "Rejected",
    Refunded = "Refunded"
}
interface PaymentDetail {
    amount:number;
    transactionId:number;
    date:Date;
    status:PaymentStatus
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

class upiPayment 
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
        if(amount <= 0 )
            throw new Error("Invalid Amount")
        if(this.bankName == "") 
            throw new Error("Invalid bank")
        if(!this.upiId.includes("@"))
            throw new Error("Invalid upi id")

        this.payment.amount = amount
        this.payment.status = PaymentStatus.Done
        console.log("Payment succeed")
    }

    /**
     * Making the refund
     */
    refund():void {
        if(this.payment.amount <= 0) 
            throw new Error("Payment hasn't completed to be refunded")
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

        this.payment.status = PaymentStatus.Done
        console.log("Payment validated")
    }

    /**
     * get transaction detail
     */
    getTrasactionDetails():string {
        if(this.payment.status == PaymentStatus.Pending) {
            return `Status is not initialed`
        }
        super.receipt()
        console.log(`Upi Id : ${this.upiId}`);
        console.log(`Bank Name : ${this.bankName}`);
        return `Upi Id: ${this.upiId} is used as the transaction destination and the amount is ${this.payment.amount}`
    }
}


const upiPayment1 = new upiPayment({amount:0,transactionId:453435,date:new Date("12-03-2005"),status:PaymentStatus.Pending},"328748@23487","BOI")

upiPayment1.pay(485774);
console.log(upiPayment1.getTrasactionDetails());