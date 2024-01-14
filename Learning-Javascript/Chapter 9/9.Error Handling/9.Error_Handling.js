setTimeout(()=>{
    console.log("Hacking Wifi ....Please wait....");
},1000);

/*
Errors are something which interrupt normal flow of execution   
try and catch allow us to catch errors so that the sccript of dying can do something usefull
*/

// try{
//     console.log(rahul);// This will cause error and interrupt normal flow of execution
// }
// catch{
//     console.log("Error unable to fetch rahul . Rest of the execution is continued")
// }
//try-catch works synchronusly .If an exception happens in setTimeout, then try-catch won't work

// try{
//     setTimeout(()=>{
//         console.log(rahul);// This will cause error and interrupt normal flow of execution
//     },100)
   
// }
// // try catch don't work as it is scheduled
// catch{
//     console.log("Error unable to fetch rahul . Rest of the execution is continued")
// }

// try catch inside settime out
setTimeout(()=>{
    try{
        console.log(rahul);
    }
        catch{
            console.log("Error was detected")
        }
},3000)

setTimeout(()=>{
    console.log("Fetching Username and Password....Please wait....");
},2000);


setTimeout(()=>{
    console.log("Hacking facebook id ....Please wait....");
},3000);

setTimeout(()=>{
    console.log("Fetched User name and Password");
},4000);

