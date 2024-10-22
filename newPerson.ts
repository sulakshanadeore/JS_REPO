
class NewPerson {
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
