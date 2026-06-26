export class Adding{
    private sum:number = 0;
    private num1:number;
    private num2:number;
    constructor(num1:number,num2:number){
        this.num1 = num1;
        this.num2 = num2;
    }

    calculateSum():number {
        return this.num1+this.num2;
    }

    healthCheck():Object {
        return {
            status:"Hello EveryOne"
        }
    }
}


const S1 = new Adding(34,23);

console.log(S1.healthCheck())
console.log(S1.calculateSum())