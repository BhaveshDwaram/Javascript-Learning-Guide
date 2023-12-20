//Normal Function
function onePlusAvg(x,y)
{
    return(1+(x+y)/2);
}
//Arrow Function MOST PREFERABLE
let sum=(a,b)=>{
    return a+b;
}
//function without arguments
const hello=()=>{
    console.log("Hi hello");
}

let a=1,b=2,c=3;
console.log("The oneplus avg of a and b is :",onePlusAvg(a,b));
console.log("The oneplus avg of b and c is :",onePlusAvg(b,c));
console.log("The oneplus avg of c and a is :",onePlusAvg(a,c));
console.log("The sum of a and b is :",sum(a,b));
console.log("The sum of b and c is :",sum(b,c));
console.log("The sum of a and c is :",sum(a,c));


