// Promise class has 6 static methods
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("This is Value 1");
    //    reject(new Error("This is an error"));
    },1000);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve("This is Value 2");
    //    reject(new Error("This is an error"));
    },2000);
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("This is Value 3");
        //    reject(new Error("This is an error"));
    },3000);
})

// //This will resolve each promise individually one at a time
// p1.then((value)=>{
//     console.log(value);
// })

// p2.then((value)=>{
//     console.log(value);
// })

// p3.then((value)=>{
//     console.log(value);
// })

// // this will resolve all promise at a time 

// p3.then((value)=>{
//     p1.then((value)=>{
//         console.log(value);
//     })
    
//     p2.then((value)=>{
//         console.log(value);
//     })
    
//     console.log(value);
// })

// but this don't work pratically as waiting time for each promise
// is very much random . So we use Promise.all(promises) api

/* 
 Promise.all(promises) it waits for all promises to resolve 
and returns the array of their  results. if any one fails it become error
for all and other results are ignored
*/

// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);// returns array containing the resolved value after 3 seconds
// })
// //if there is any rejection then all promises results are ignored

/*
 Promise.allSettled(promises) waits for all promises to settle and returns their 
 results as an array of objects with status and value
*/

// let promise_all = Promise.allSettled([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);// returns array containing the resolved value after 3 seconds
// })

/*
Promise.race(promises) waits for the first promise to settle and its result
/error become the outcome
*/
// let promise_all = Promise.race([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);// returns p1  value as it is the 1st promise to settle 
//     // in case p1 is not resolved but rejected it also returns the error as
//     // p1 is the first to settle
// })

/*
Promise.any(promises) waits for 1st promise to resolve (but not reject)
and returns the value of resolved promise. if none are resolved it throws
aggregate error
*/

// let promise_all = Promise.any([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);// returns p1  value as it is the 1st promise to settle 
//     // in case p1 is not resolved but rejected it also returns the error as
//     // p1 is the first to settle
// })

/*
Promise.resolve(value) makes  a resolved promise with the given value
*/
// let promise_all=Promise.resolve(6);
// promise_all.then((value)=>{
//     console.log(value);
// })

/*
Promise.reject(error) make a rejected promise with the given error
*/
// let promise_all=Promise.reject(new Error("6"));
// promise_all.then(null,(value)=>{
//     console.log(value);
// })
