// Async and Await  helps us to write promise-based behaviour in
// a cleaner style avoiding the need to explicitly configure the promise chains


// Async    

//This is a special syntax to work with promises in js. A function can be made async 
//by using async keyword like this : 
            
// async function bhavesh(){
//     return 7
// }
// bhavesh().then(alert);
/*
Async always returns a promise and other values are wrapped in promise 
automatically. so async function returns a promise and wraps non promise in it .
*/

// Await keyword 
/*
Await keyword only works inside async function. The await keyword akes javascript
wait until the promise settles and returns  its value.
*/
// async function bhavesh(){

//     let delhiweather =new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//             resolve("27 degrees");
//      },4000);   
//     })

//     let bangloreweather =new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                resolve("21 degrees");
//         },7000);   
//        })


//        // Normal method without await
//     //    delhiweather.then(alert);
//     //    bangloreweather.then(alert);

//     // using await

//     console.log("Fetching Delhi Weather Please wait......")
//     const delhiW= await delhiweather;
//     console.log("Fetched Delhi Weather ",delhiW)// This wont print until delhiweather resolved

//     console.log("Fetching Banglore Weather Please wait.....")
//     const bangloreW= await bangloreweather;
//     console.log("Fetched Banglore Weather ",bangloreW)// This wont print until bangloreweather resolved

//     return[delhiW,bangloreW];
// }

// // const dwaram=()=>{
// //     console.log("DWARAM WON'T WAIT !...");
// // }
// // console.log("Welcome to weather control");
// // let result = bhavesh();
// // let b= dwaram();
// // result.then((result)=>{
// //     console.log( "Final Array :- ",result);// result is a promise returned by async
// // })


// // // To make this logic in proper way use async

// async function logic(){
//     const dwaram=()=>{
//         console.log("DWARAM WAITS THIS TIME !...");
//     }
//     console.log("Welcome to weather control");
//     let result = await bhavesh();
//     let b= await dwaram();
//     console.log( "Final Array :- ",result);// result is a promise returned by async
// }
// logic();


// An Example how async will make promises clear and better 
 
// // Normal Promise Execution

// fetch('https://jsonplaceholder.typicode.com/todos/1')// This returns a promoise object automatically
// .then(response=>response.json)
// .then(json=>console.log(json))
// .catch(error=>console.log(error));

// // using Async and Await
async function runProcess(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const json =response.json();
    console.log(json);

}

runProcess();