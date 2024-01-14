// //we can chain promises and make them passed resolved values
// // at one another like this. The idea is to pass the result 
// // through the cahin of handlers

// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds");
//         resolve("This is promise 1 and  resolved after 2 sec");
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     // Alternate way
//     // let p2 =new Promise((resolve,reject)=>{
//     //     setTimeout(()=>{
//     //         resolve("This is promise 2 and  resolved");
//     //     },2000);

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("This is promise 2 and  resolved after another 2 sec");
//         },2000);
//     })
//     return p2;
// }).then((value)=>{
//     console.log(value);
//     return 2; // js will convert this to new promise3
// }).then((value)=>{
//     console.log("This is : ",value);
// })

const LoadScript=(src)=>{
   return new Promise((resolve,reject)=>{
    let Script=document.createElement("script");
    Script.type="text/javascript";
    Script.src=src;
    document.body.appendChild(Script);//The appendChild() method of the Node interface 
    //adds a node to the end of the list of children of a specified parent node.
    Script.onload=()=>{
        resolve(src);
    }
    Script.onerror=()=>{
        reject(0);
    }
   })
}
   let p1= LoadScript("https://twitter.com/home");// giving invalid src will give error which handeled by catch
   p1.then((value)=>{
    console.log("This Website is Loaded : ",value);
    return LoadScript("https://nie.ac.in/");
   }).then((value)=>{
    console.log("This Website is Loaded : ",value);
   }).catch((error)=>{
    console.log("Sorry This is an error");
   })