/* 
For running propmt inside node js :-
1. In the terminal run  npm install prompt -- save 
2. Then in terminal run npm install prompt-sync
3. Finally before running prompt use this line your file
    const prompt=require('prompt-sync')();
*/

const prompt=require('prompt-sync')();
let a=prompt("Hi whats your age ");
console.log("Before parsing this is a :",typeof a);
a=Number.parseInt(a);
console.log("After parsing this is a :",typeof a);
/* There are  3 types of conditional statements in js 
    1.if statement
    2. if else statement
    3.if else if else statement
*/
if(a>0)
{
    if(a>100)
    {
        console.log("Number is greater than 100");

    }
    else{
        console.log("Number is greater than 0 but less than 100");
    }
}
else if(a<0){
    console.log("Number is less than 0");
}
else{
    console.log("Number is equal to 0");
}
// ternary operator
console.log("You",(a>18 ?"can drive as your age is greater than 18" :"cannot drive as age is less than 18"));

//------>Switch statement<------//
const value="orange";
switch(value){
    case "orange" :
        console.log("This is an orange");
        break;//comment out break to know its significance in switch statement
    case "mango" :
    case "papaya" :
        console.log("These are mangoes and papyas");
        break;
     case "jackfruit" :
        console.log("This is a jackfruit");
        break;
    default :
        console.log("Sorry enter a  correct value !");
}