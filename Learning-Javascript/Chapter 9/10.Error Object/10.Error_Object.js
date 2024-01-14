// // For all built in errors, the error obj has 2 main properties

// try{
//     bhavesh
// }
// catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//Throwing custom error
try{
    console.log(bhavesh)
    // throw new Error(" Bhavesh is a good boy");
    throw new ReferenceError(" Bhavesh is a good boy");
    // throw new SyntaxError(" Bhavesh is a good boy");
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
