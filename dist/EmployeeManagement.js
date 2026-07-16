export class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        console.log(`Welcome onboard on HRM ${name}`);
    }
    lineSeperate() {
        console.log('====================================');
    }
    increaseSalary(percentage) {
        if (percentage <= 0) {
            throw new Error("Percentage must be greater than zero");
        }
        this.salary += Math.floor((percentage / 100) * this.salary);
        this.lineSeperate();
        console.log(`Congratulations 🥳 🥳  your new salary is ₹${this.salary}`);
        this.lineSeperate();
    }
    displayDetails() {
        this.lineSeperate();
        console.log(`Employee id:${this.id}`);
        console.log(`Employee Name:${this.name}`);
        console.log(`Employee Salary:₹${this.salary}`);
        this.lineSeperate();
    }
    get annualSalary() {
        return this.salary * 12;
    }
}
//# sourceMappingURL=EmployeeManagement.js.map