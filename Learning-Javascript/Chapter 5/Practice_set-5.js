const prompt=require('prompt-sync')();
let arr=[];
let a;
do
{
a= prompt("Enter a number that should be inserted into array : ");
a=Number.parseInt(a);
arr.push(a);
console.log(arr);
}while(a!=0);
console.log("\n\n");
let given_arr=[120,34,20,1,100,110,30,45,67,89];
division_10=(value)=>{
    return value%10==0;
}
let filtered_arr=given_arr.filter(division_10);
console.log("The filtered array whose elements are divisible by 10  : ",filtered_arr);

let square_arr=given_arr.map((value)=>{
    return value*value;
})
console.log("The squared array of given array is : ",square_arr);
let array=[1,2,3,4,5];
let fact_n=array.reduce((h1,h2)=>{
    return h1*h2;
})
console.log("The reduced array of given array is : ",fact_n);
