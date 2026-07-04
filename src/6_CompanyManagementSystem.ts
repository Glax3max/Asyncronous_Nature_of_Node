interface personData {
    id:number;
    name1:string;
    age:number;
    email:string
}

interface employeeData{
    employeeId:number;
    department:string;
    salary:number;
    joiningDate:Date;
}
class Person{
    constructor(
        protected person:personData
    ) {}

    /**
     * Displays the conplete Info of the Person
     */
    displayInfo() {
        console.log('====================================');
        console.log("Person Details");
        console.log('====================================');
        console.log(`ID : ${this.person.id}`)
        console.log(`Name : ${this.person.name1}`)
        console.log(`Age : ${this.person.age}`)
        console.log(`Email : ${this.person.email}`)
    }
    /**
     * Increments the age on every birthday
     */
    celebratebirthday() {
        let age = this.person.age
        this.person.age = age+1;   
    }
}

class Employee extends Person{
    constructor(
        person:personData,
        protected employee:employeeData
    ){
        super(person)
    }
    /**
     * Increment Salary method
     */
    increaseSalary(percent:number) {
        let sal = this.employee.salary;
        this.employee.salary = sal + (sal*percent)/100;
    }

    /**
     * Annual Salary
     */
    get annualSalary() {
        return this.employee.salary*12;
    }

    /**
     * Display info overridding the parent
     */
    displayInfo() {
        super.displayInfo()
        console.log(`EmployeeId : ${this.employee.employeeId}`)
        console.log(`Department : ${this.employee.department}`)
        console.log(`Salary : ${this.employee.salary}`)
        console.log(`JoiningDate : ${this.employee.joiningDate}`)
    }

}


class Developer extends Employee {
    constructor(
        person:personData,
        employee:employeeData,
        public programmingLanguages:string[],
        public experienceYears:number,
        public level:number
    ){
        super(person,employee);
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
        person:personData,
        employee:employeeData,
        public teamMembers:Employee[],
        public bonus:number
    ){
        super(person,employee);
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
        person:personData,
        public hourlyRate:number,
        public hourWorked:number,
    ){
        super(person);
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

const developer = new Developer({id:12,name1:"Abhishek",age:23,email:"abhishekspps825406@gmail.com"},{employeeId:23,department:"Engineering",salary:57798984,joiningDate:new Date("12-4-2026")},['C++','Typescript'],2,2)
printPersonInfo(developer)