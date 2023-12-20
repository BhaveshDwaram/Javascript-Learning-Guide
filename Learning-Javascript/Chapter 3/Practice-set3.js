// const prompt=require('prompt-sync')();
// let marks={
//  harry :98,
//  rohan :70,
//  aakash :7
// }

// //Q1
// for(let i=0;i<Object.keys(marks).length;i++){
//     console.log("Marks of "+Object.keys(marks)[i]+" is "+marks[Object.keys(marks)[i]]);
//                                                             //Object.values(marks)[i] alternate
// }

// //Q2
// for(let a in marks){
//     console.log("Marks of "+a+" is "+marks[a]);
// }

// //Q3

// let cn=999
// let n=0;
// while(n!=cn)
// {
//     console.log("Try again\n");
//  n=prompt("Enter correct number ");    
 
// }
// console.log("You have entered correct Number");

////Q4
let mean=(a,b,c,d,e)=>{
    return ((a+b+c+d+e)/5);
}
console.log(mean(4,5,6,7,8));