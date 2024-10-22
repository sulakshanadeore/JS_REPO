class Student
{
rollno:number;
name:string;
constructor(studcode:number,studname:string)
{
    this.rollno=studcode;
    this.name=studname;

}

showDetails=()=>console.log("Student Rollno=" + this.rollno + " and Student Name=" + this.name);

showDetails1()
{
    console.log("Student Rollno=" + this.rollno + " and Student Name=" + this.name);
}

ArrowDemo() {
    const nos=[1,2,3];

const calculateSquare=nos.map(x=>x*x);
console.log(calculateSquare);
}

}

let s1=new Student(101,'Abhishek');
s1.showDetails();
console.log("-------------------------------")

s1.showDetails1();
console.log("-------------------------------")
s1.ArrowDemo();