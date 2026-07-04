class Person{
    constructor(
        public readonly id:number,
        public name1:string,
        public age:number,
        public readonly email:string
    ) {}

    /**
     * Displays the conplete Info of the Person
     */
    displayInfo() {
        console.log('====================================');
        console.log("Person Details");
        console.log('====================================');
        console.log(`ID : ${this.id}`)
        console.log(`Name : ${this.name1}`)
        console.log(`Age : ${this.age}`)
        console.log(`Email : ${this.email}`)
    }
    /**
     * Increments the age on every birthday
     */
    celebratebirthday() {
        let age = this.age
        this.age = age+1;   
    }
}

class Employee extends Person{
    constructor(
        id:number,
        name1:string,
        age:number,
        email:string,
        public readonly employeeId:number,
        public department:string,
        public salary:number,
        public joiningDate:Date
    ){
        super(id,name1,age,email)
    }
    /**
     * Increment Salary method
     */
    increaseSalary(percent:number) {
        let sal = this.salary;
        this.salary = sal + (sal*percent)/100;
    }

    /**
     * Annual Salary
     */
    get annualSalary() {
        return this.salary*12;
    }

    /**
     * Display info overridding the parent
     */
    displayInfo() {
        super.displayInfo()
        console.log(`EmployeeId : ${this.employeeId}`)
        console.log(`Department : ${this.department}`)
        console.log(`Salary : ${this.salary}`)
        console.log(`JoiningDate : ${this.joiningDate}`)
    }

}


class Developer extends Employee {
    constructor(
        id:number,
        name1:string,
        age:number,
        email:string,
        employeeId:number,
        department:string,
        salary:number,
        joiningDate:Date,
        public programmingLanguages:string[],
        public experienceYears:number,
        public level:number
    ){
        super(id,name1,age,email,employeeId,department,salary,joiningDate);
    }

    /**
     * Add language
     */
    addLanguage(lang:string) {
        this.programmingLanguages.push(lang)
    }

    /**
     * remove language
     */
    removeLangauge(lang:string) {
        let idx:number = this.programmingLanguages.indexOf(lang)
        if(idx != -1) {
            this.programmingLanguages.splice(idx)
        }else{
            throw new Error("Language not found")
        }
    }

    /**
     * Display skills
     */

    get displaySkills() {
        return this.programmingLanguages;
    }
    /**
     * Display Info
     */
    displayInfo() {
        super.displayInfo();
        console.log(`Programming that i know : ${this.programmingLanguages}`);
        console.log(`Total programming experience : ${this.experienceYears}`);
        console.log(`Level : ${this.level}`);        
    }

}

class Manager extends Employee {
    constructor(
        id:number,
        name1:string,
        age:number,
        email:string,
        employeeId:number,
        department:string,
        salary:number,
        joiningDate:Date,
        public teamMembers:Employee[],
        public bonus:number
    ){
        super(id,name1,age,email,employeeId,department,salary,joiningDate);
    }
    /**
     * Adding employee
     */
    addEmployee(employee:Employee) {
        this.teamMembers.push(employee)
    }

    /**
     * removeEmployee
     */
    removeEmployee(employee:Employee) {
        const idx:number = this.teamMembers.indexOf(employee);
        if(idx != -1) {
            this.teamMembers.splice(idx);
        }
        else{
            throw new Error("Employee does not exist")
        }        
    }

    /**
     * Get team size
     */
    get getTeamSize() {
        return this.teamMembers.length
    }


    /**
     * Increase bonus
     */
    increaseBonus(bonus:number) {
        this.bonus = bonus
    }

    /**
     * DisplayInfo overriding
     */
    displayInfo() {
        super.displayInfo()
        console.log(`Team members are  : ${this.teamMembers}`);
        console.log(`Bonus : ${this.bonus}`)
    }
}


class Contractor extends Person {
    constructor(
        id:number,
        name1:string,
        age:number,
        email:string,
        public hourlyRate:number,
        public hourWorked:number,
    ){
        super(id,name1,age,email);
    }

    /**
     * CalculatePay - It calculates the total pay
     */
    calculatePay() {
        console.log(`The total pay is : ${this.hourWorked*this.hourlyRate}`);        
    }

    /**
     * DisplayInfo
     */
    displayInfo() {
        super.displayInfo()
        console.log(`HourlyRate: ${this.hourlyRate}`);
        console.log(`HourWorked: ${this.hourWorked}`);
    }

}

function printPersonInfo(person:Person) {
    person.displayInfo();
}

const developer = new Developer(12,"Abhishek",23,"abhishekspps825406@gmail.com",23,"Engineering",57798984,new Date(12-4-2026),['C++','Typescript'],2,2)
printPersonInfo(developer)