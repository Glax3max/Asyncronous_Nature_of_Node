"use strict";
class Person {
    person;
    constructor(person) {
        this.person = person;
    }
    displayInfo() {
        console.log('====================================');
        console.log("Person Details");
        console.log('====================================');
        console.log(`ID : ${this.person.id}`);
        console.log(`Name : ${this.person.name1}`);
        console.log(`Age : ${this.person.age}`);
        console.log(`Email : ${this.person.email}`);
    }
    celebratebirthday() {
        let age = this.person.age;
        this.person.age = age + 1;
    }
}
class Employee extends Person {
    employee;
    constructor(person, employee) {
        super(person);
        this.employee = employee;
    }
    increaseSalary(percent) {
        let sal = this.employee.salary;
        this.employee.salary = sal + (sal * percent) / 100;
    }
    get annualSalary() {
        return this.employee.salary * 12;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`EmployeeId : ${this.employee.employeeId}`);
        console.log(`Department : ${this.employee.department}`);
        console.log(`Salary : ${this.employee.salary}`);
        console.log(`JoiningDate : ${this.employee.joiningDate}`);
    }
}
class Developer extends Employee {
    programmingLanguages;
    experienceYears;
    level;
    constructor(person, employee, programmingLanguages, experienceYears, level) {
        super(person, employee);
        this.programmingLanguages = programmingLanguages;
        this.experienceYears = experienceYears;
        this.level = level;
    }
    addLanguage(lang) {
        this.programmingLanguages.push(lang);
    }
    removeLangauge(lang) {
        let idx = this.programmingLanguages.indexOf(lang);
        if (idx != -1) {
            this.programmingLanguages.splice(idx);
        }
        else {
            throw new Error("Language not found");
        }
    }
    get displaySkills() {
        return this.programmingLanguages;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Programming that i know : ${this.programmingLanguages}`);
        console.log(`Total programming experience : ${this.experienceYears}`);
        console.log(`Level : ${this.level}`);
    }
}
class Manager extends Employee {
    teamMembers;
    bonus;
    constructor(person, employee, teamMembers, bonus) {
        super(person, employee);
        this.teamMembers = teamMembers;
        this.bonus = bonus;
    }
    addEmployee(employee) {
        this.teamMembers.push(employee);
    }
    removeEmployee(employee) {
        const idx = this.teamMembers.indexOf(employee);
        if (idx != -1) {
            this.teamMembers.splice(idx);
        }
        else {
            throw new Error("Employee does not exist");
        }
    }
    get getTeamSize() {
        return this.teamMembers.length;
    }
    increaseBonus(bonus) {
        this.bonus = bonus;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Team members are  : ${this.teamMembers}`);
        console.log(`Bonus : ${this.bonus}`);
    }
}
class Contractor extends Person {
    hourlyRate;
    hourWorked;
    constructor(person, hourlyRate, hourWorked) {
        super(person);
        this.hourlyRate = hourlyRate;
        this.hourWorked = hourWorked;
    }
    calculatePay() {
        console.log(`The total pay is : ${this.hourWorked * this.hourlyRate}`);
    }
    displayInfo() {
        super.displayInfo();
        console.log(`HourlyRate: ${this.hourlyRate}`);
        console.log(`HourWorked: ${this.hourWorked}`);
    }
}
function printPersonInfo(person) {
    person.displayInfo();
}
const developer = new Developer({ id: 12, name1: "Abhishek", age: 23, email: "abhishekspps825406@gmail.com" }, { employeeId: 23, department: "Engineering", salary: 57798984, joiningDate: new Date("12-4-2026") }, ['C++', 'Typescript'], 2, 2);
printPersonInfo(developer);
//# sourceMappingURL=6_CompanyManagementSystem.js.map