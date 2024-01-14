/* 
Try-catch construct may have one more code cause : Finally
If it exists it runs in all cases
        after try  if there were no errors
        after catch if there are any errors
        if there is returnin try finally is executed just before control returns out of code
*/ 

// try{
//     console.log(program)//causes error
//     console.log("Program Runned Successfully");
// }
// catch(error){
//     console.log("This is an Error")
// }
// finally{
//     console.log("Finally is executed");// finally executed
// }

// try{
//     console.log(program)//causes error
//     console.log("Program Runned Successfully");
// }
// catch(error){
//     console.log("This is an Error")
//     console.log(program)// causes error
// }
// finally{
//     console.log("Finally is executed");// finally executed
//     //close a file
//     //exit the loop
//     // write to log file
// }
// console.log("This won't run");  

// 3rd case
const func=()=>{
    try{
        console.log("Program Runned Successfully");
        return;
    }
    catch(error){
        console.log("This is an Error")
        console.log(program)// causes error
    }
    finally{
        console.log("Finally is executed");// finally executed
        //close a file
        //exit the loop
        // write to log file
    }
}

func();