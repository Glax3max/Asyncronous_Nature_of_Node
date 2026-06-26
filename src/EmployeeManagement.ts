export class Employee{
    // properies
    private readonly id:string;
    private name:string;
    private salary:number;

    constructor(name:string,id:string,salary:number){
        this.id = id;
        this.salary = salary;
        this.name = name;
        console.log('====================================');
        console.log(`Welcome onboard on HRM ${name}`);
        console.log('====================================');
    }
    

    /** 
     * Incremental Salary method
    */
    increaseSalary(percent:number) {
        if(percent < 0) {
            console.log('====================================');
            console.log("Enter a valid percent value");
            console.log('====================================');
            return;
        }
        this.salary  += (percent/100)*this.salary;
        console.log('====================================');
        console.log(`Congratulations 🥳 🥳  your new salary is ₹${this.salary}`);
        console.log('====================================');
    }

    /**
     * Showing the detail of the Employee
     */

    dispalyDetails() {
        console.log('====================================');
        console.log(`Employee id:${this.id}`);
        console.log(`Employee Name:${this.name}`);
        console.log(`Employee Salary:₹${this.salary}`);
        console.log('====================================');        
    }

    /**
     * Getting the Annual salary
     */

    get annualSalary() {
        return this.salary*12;
    }

}