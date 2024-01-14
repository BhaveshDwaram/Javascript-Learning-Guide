// Promise is nothing but promise of execution of code
//promise syntax

let promise=new Promise (function(resolve,reject){ // both resolve  and reject are predefined in js 
    alert("hello");
     resolve(56);
// resolve and reject are call back functions
// resolve(value)->if the job is finished  successfully
// reject(error)-> if the job fails
});
console.log("Hello world");
setTimeout(function(){
    console.log("Hello world in 2 seconds");
},2000);
console.log("My name is "+"hello three");
console.log(promise);   // prints promise object
//promise state--->Initially pending fullfilled(when resolve is called) or reject(when reject is called)
/*
promise result--->Initially undefined 
cahnges to value(when  resolved->resolve(value)) or error(when rejected-> reject(reject))
*/