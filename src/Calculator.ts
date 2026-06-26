export class Calculator{
    private result:number;
    constructor() {
        this.result = 0;
    }

    // Methods
    add(num1:number,num2:number):number {
        this.result = num1+num2;
        return this.result;
    }

    subtract(num1:number,num2:number):number {
        this.result = num1-num2;
        return this.result;
    }

    multiply(num1:number,num2:number):number {
        this.result = num1*num2;
        return this.result;
    }

    divide(num1:number,num2:number):number|string {
        if(num2 === 0) {
            return "Divide by zero not allowed"
        }
        this.result = num1/num2;
        return this.result;
    }

    clear() {
        console.log('====================================');
        console.log("Press in your numbers");
        console.log('====================================');
    }

    getResult() {
        return this.result;
    }
}