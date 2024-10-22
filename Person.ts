
class Person {
    personid:number=0
name:string="";
bdate:Date=new Date();
    constructor(pid,name,birthDate) {
        this.personid=pid;
    this.name = name;
    this.bdate=birthDate;
    }
    getName() {
        console.log(this.personid);
        console.log(this.name);
        console.log(this.bdate);

    }
    }
    var obj = new Person(11,"Narendra Modi",new Date(2024,9,10));
    obj.getName();
    
    