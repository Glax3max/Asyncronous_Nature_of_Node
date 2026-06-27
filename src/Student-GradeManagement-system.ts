export class Student{
    constructor(
        private marks:number[],
        private readonly id:number,
        private name:string,
    ){
        console.log(`Hello ${name} ! Here are your marks:`)
        this.marks = []
    }

    addMark(mark:number):string{
        if(mark < 0 || mark > 100) {
            throw new Error("Invalid marks")
        }
        this.marks.push(mark);
        return `Mark ${mark} added in the mark DB`
    }

    addMarks(marks:number[]) {
        for(const i of marks) {
            this.addMark(i);
        }
    }

    removeLastMark():number {
        if(this.marks.length == 0) {
            throw new Error("No marks in the DB")
        }
        let len = this.marks.length;
        let lastMark = this.marks[len-1];
        this.marks.pop();
        return lastMark;
    }

    averageMarks():number {
        if(this.marks.length === 0) {
            throw new Error("No marks in the DB")
        }
        const sum = this.marks.reduce((acc,curr)=>{
            return acc+curr
        },0)
        const len = this.marks.length
        return sum/len
    }

    highestMark():number {
         if(this.marks.length === 0) {
            throw new Error("No marks in the DB")
        }

        let highest = -1; 
        this.marks.forEach((ele)=>highest = Math.max(ele,highest))
        return highest        
    }

    lowestMark():number {
         if(this.marks.length === 0) {
            throw new Error("No marks in the DB")
        }

        let lowest = 101; 
        this.marks.forEach((ele)=>lowest = Math.min(ele,lowest))
        return lowest        
    }

    totalMark():number {
        if(this.marks.length === 0) {
            throw new Error("No marks in the DB")
        }

        let total = 0;
        this.marks.forEach((ele)=>total+=ele)
        return total;
    }

    get totalSubjects():number {
        return this.marks.length
    }

    hasPassed():boolean {
        if(this.marks.length === 0) {
            throw new Error("No marks in the DB")
        }

        const avg = this.averageMarks()

        if(avg >= 40) {
            return true;
        }

        return false;
    }

    getGrade():string {
          if(this.marks.length === 0) {
            throw new Error("No marks in the DB")
        }

        const avg = this.averageMarks()
        if(avg >= 90) return "A+";
        if(avg >= 80) return "A"; 
        if(avg >= 70) return "B"; 
        if(avg >= 60) return "C"; 
        if(avg >= 40) return "D";
        return "F"
    }


    displayReport() {
        console.log('====================================');
        console.log("Student Report");
        console.log('====================================');
        console.log(`ID: ${this.id}`)
        console.log(`Name: ${this.name}`)
        console.log("")
        console.log("")
        
        console.log("Marks:")
        this.marks.forEach((ele)=> console.log(ele))

        console.log(`Stubjects: ${this.totalSubjects}`);
        console.log(`Total: ${this.totalMark()}`);
        console.log(`Average Mark: ${this.averageMarks()}`);
        console.log(`Highest Mark: ${this.highestMark()}`);
        console.log(`Lowest Mark: ${this.lowestMark()}`);
        console.log(`Grade: ${this.getGrade()}`);
        console.log(this.hasPassed() ? "Pass" :"Fail")
        console.log('====================================');
        
    }
}