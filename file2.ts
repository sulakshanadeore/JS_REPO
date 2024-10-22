class customer
{
custid:number=0;
custname:string="";

constructor(p_custid:number,p_custname:string)
{
this.custid=p_custid;
this.custname=p_custname;
}
public printDetails():void
{
console.log(this.custid);
console.log(this.custname);
}
}
let c=new customer(12,"Alina");
c.printDetails();


// export let a=0,b=0;
// export function subtract(a, b) {
//     let myans = a - b;
//     return myans;
// }
// export function divide(a, b) {
//     let myans = a / b;
//     return myans;
// }



// newAdd(10,20);
// console.log(ans);
//add(10,20);
//console.log()
// function callSum()
// {
//     return add(a,b);
// }

// function callmultiply()
// {

//     return multiply(a,b);