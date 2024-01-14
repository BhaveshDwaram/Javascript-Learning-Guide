/*
promise are promise for execution. Either code exceutes 
or fails and in both cases the user is notifed
normal structure of promise is  Promise((resolve,reject)=>{

})
  consumers then & catch
  the consuming code can receive the final result of a promise through
  then & catch. Most fundamental one is "then"
  promise.then(
    function(result){
        //handle 
  }
    function(error){
        // handle
    }
  )
*/

//----------------------------------------------------------------------------------------------------------

// // if we are intrested only in successful completions we can provide only
// // one function argument  to then():
//  let p= new Promise(resolve=>{
// setTimeout(()=>{
//     resolve("done")
// },1000);
//  })

//  p.then(
//     (bhavesh)=>{
//         alert(bhavesh);
//     },
//     // (dwaram)=>{  //this won't work as promise has only resolve call back
//     //     console.log("paradox");
//     // }
//     )


//---------------------------------------------------------------------------------------------------------------

// if we are intrested only in errors we can use null
// as first argument  
// then(
//     null,
//     (error)=>{
//         //handle
//     }
//     ):
// or simply we can use catch

// let p= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("This is an error"));
//     },1000);
//      })
    
//      p.then(null,
//         (bhavesh)=>{
//             console.log(bhavesh);
//         },
//      )

    // or use a catch statement
//     //  p.catch((bhavesh)=>{
//     //     console.log(bhavesh);
//     //  })

//-----------------------------------------------------------------------------------------------------------

// example of exceution
// let p1 =new Promise((resolve,reject)=>{
//     console.log("Promise is Pending");
//         setTimeout(()=>{
//             console.log(" I am a promise and I am Fullfilled");
//          resolve(true);
//         },4000);
// });

// let p2 =new Promise((resolve,reject)=>{
//     console.log("Promise is Pending");
//         setTimeout(()=>{
//             console.log(" I am a promise and I am rejected");
//            reject(new Error("I am an Error"))
//         },4000);
// });
// console.log(p1,p2);

// p1.then((value)=>{  //executes after promise is fullfilled
// console.log(value);
// });


// p2.catch((error)=>{ // executes after promise is rejected
//     console.log(error);
//     });