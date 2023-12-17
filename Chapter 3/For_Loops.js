// const prompt=require('prompt-sync')();
// for printing 1 to 10 numbers
// for(let i=1;i<=10;i++)
// {
//     console.log(i,"\n");
// }
//  console.log(i); /*this will give undefined as let scope is block level 
//                     and i value exist inside for loop only*/
// for getting some of 1st n numbers;
// let sum=0;
// let n=prompt("Enter the value of n ");
// n=Number.parseInt(n);
// for(let i=1;i<=n;i++)
// {
//     sum+=i;
// }
// console.log("The sum of n numbers is : ",sum);
// ----For in loops----//
let obj={
    bhavesh : 20,
    venkata : 45,
    dwaram : 30,
    kumar : 10,
    reddy : 35
}

// for(let a in obj){
//     console.log("The value of "+a+" is "+obj[a]);//here obj[a] are converted to string as they are concatenated
//     console.log("The value of ",a,"is",obj[a]);// here obj[a] are not converted to string
// }
//----For of loops----//

for(let a of "bhavesh"){ //if we use obj in place of bhavesh it gives error 
    console.log(a);// becuase for of loop should be iteratable.
}