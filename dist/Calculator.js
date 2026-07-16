export class Calculator {
    result;
    constructor() {
        this.result = 0;
    }
    add(num1, num2) {
        this.result = num1 + num2;
        return this.result;
    }
    subtract(num1, num2) {
        this.result = num1 - num2;
        return this.result;
    }
    multiply(num1, num2) {
        this.result = num1 * num2;
        return this.result;
    }
    divide(num1, num2) {
        if (num2 === 0) {
            return "Divide by zero not allowed";
        }
        this.result = num1 / num2;
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
//# sourceMappingURL=Calculator.js.map