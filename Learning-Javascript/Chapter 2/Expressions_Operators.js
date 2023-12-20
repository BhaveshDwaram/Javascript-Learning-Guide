//These are valid expressions and it wont give any error 
66
"Bhavesh"
false
//////////////////////////////////
console.log("OPerators in javascript");
////--->Arithmetic operators<----////
let a=45,b=8;
console.log("a+b is : ",a+b);
console.log("a-b is : ",a-b);
console.log("a*b is : ",a*b);
console.log("a/b is : ",a/b);
console.log("a%b is : ",a%b);
console.log("a power b is : ",a**b);
console.log("a++ is : ",a++);
console.log("Current value of a is :",a);//post increment
a=45;
console.log("++a is : ",++a);
console.log("Current value of a is :",a);
a=45;
console.log("a-- is : ",a--);
console.log("Current value of a is :",a);//post increment
a=45;
console.log("--a is : ",--a);
console.log("Current value of a is :",a);

////--->Assignment  operators<----////
let c=12,d=10;
c+=5;
console.log("The Value of c+=5 is :",c);
//similarly -=,*=,/=,%=
c **=4;
console.log("The Value of c**=4 is :",c);

////--->Comparison operators<----////

let comp1=3,comp2=8;
console.log("Is comp1==comp2 ? :",comp1==comp2);
console.log("Is comp1!=comp2 ? :",comp1!=comp2);
console.log("Is comp1===comp2 ? :",comp1===comp2);
console.log("Is comp1!==comp2 ? :",comp1!==comp2);

//if we change comp1 and comp2 to different datatypes but same value
console.log("\n\n");//breaks line should be in quotes
comp1=4,comp2="4";
console.log("Is comp1==comp2 ? :",comp1==comp2);
console.log("Is comp1!=comp2 ? :",comp1!=comp2);
console.log("Is comp1===comp2 ? :",comp1===comp2);//triple equals check the datatype also
console.log("Is comp1!==comp2 ? :",comp1!==comp2);//similar to triple equal it checks the datatype also

//similarly <,>,>=,<= ?(ternary operator)
console.log("If comp1==comp2 print 1 or else print 2");
console.log(comp1==comp2 ?1 :2);
console.log(comp1!=comp2 ?1 :2);

////--->Logical operators<----////
let x=5,y=6;
console.log(x<6&&x==5);
console.log(x<6||x==6);
console.log(!false);
console.log(!true);

