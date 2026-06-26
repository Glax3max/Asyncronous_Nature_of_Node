export class Employee{
    constructor(
        private readonly id:string,
        private name:string,
        private salary:number
    ){
        console.log(`Welcome onboard on HRM ${name}`);
    }
    

    /**
     * Just a clean code thing 
     */
    private lineSeperate() {
        console.log('====================================');
    }

    /** 
     * Incremental Salary method
    */
    increaseSalary(percentage:number) {
        if(percentage <= 0) {
            throw new Error("Percentage must be greater than zero")
        }
        this.salary  += Math.floor((percentage/100)*this.salary);
        this.lineSeperate();
        console.log(`Congratulations 🥳 🥳  your new salary is ₹${this.salary}`);
        this.lineSeperate();
    }

    /**
     * Showing the detail of the Employee
     */

    displayDetails() {
        this.lineSeperate();
        console.log(`Employee id:${this.id}`);
        console.log(`Employee Name:${this.name}`);
        console.log(`Employee Salary:₹${this.salary}`);
        this.lineSeperate();
    }

    /**
     * Getting the Annual salary
     */

    get annualSalary() {
        return this.salary*12;
    }

}