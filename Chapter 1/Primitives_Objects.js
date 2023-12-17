let a=23;
let b=null;
let c=true;// can be false also
let d=BigInt("567")+BigInt("3");
let e ="Bhavesh";
let f=Symbol("Hello world");
let g=undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof(c));
/*Objects are non primitive data types */
// objects in javascript
 const item={
    "Bhavesh":true,
    "Dwaram" :false,
    "Venkata":67,
    "Reddy":undefined
 }
 console.log(item["Bhavesh"]);//prints true
 console.log(item["Venkata"]);//67