const prompt=require('prompt-sync')();
//----Q1------//
let age=prompt("Enter your age\n");
console.log("Your age",(age>10&&age<20)?"lies betwenen 10 and 20" :"doesn't lie between 10 and 20");
//----Q2-----//
//switch statement already executed in conditional expression
//----Q3----//
if(age%2==0&&age%3==0)
{
        console.log("Your age is divisible by both 2 and 3");
}
else
{
    console.log("Your age is not divisible by BOTH 2 and 3")
}
//----->Q4<-----//
// if(age%2==0||age%3==0)
// {
//     console.log("Your age is either divisible by both 2 or 3");
// }
// else{
//     console.log("Your age is neither divisible by both 2 nor 3");
// }
//---->already done in conditional expression<----//