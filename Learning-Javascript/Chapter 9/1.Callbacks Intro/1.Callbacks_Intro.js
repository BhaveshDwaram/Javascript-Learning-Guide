// //synchronous programming
// //The sync functions execute one after other after each one is complets its execution
//  let a=prompt("Isnt this a synchronous function ?");
//  let b=prompt("Isnt this also a  synchronous function ?");
//  // These are synchronous because they are executed one by one after each complets its own execution
//  //aynchronous programming
//  // In asynchronous programming once a function starts exceution it can complete
//  // it's execution later allowing other functions to complete execution before it.
//  // set timeout functions are example of async programming
// console.log("Execution starts now");
//  setTimeout(()=>{
//     console.log("The execution is completed now");
//  },3000) ;
//  console.log("Execution is interrupted");

// // call backs
// function loadScript(src,callback){
//     script=document.createElement('script');
//     script.src=src;
//     script.onload=()=>callback(script);
//     document.head.append(script);
// }
// loadScript('https://www.facebook.com',(script)=>{
//     alert('script is loaded');
//     alert(script.src);
// });

// // proper way
// function loadScript(src,callback){
//     script=document.createElement('script');
//     script.src=src;
//     script.onload=()=>callback(script);
//     document.head.append(script);
// }

// function message(script){
//     alert('script is loaded');
//     alert(script.src);
// }
// loadScript('https://www.facebook.com',message);

//Error handling 
function loadScript(src,callback){
    script=document.createElement('script');
    script.src=src;
    script.onload=()=>{
        console.log("Loaded Script with src : "+src);
        callback(null,script);
    }
    script.onerror=()=>{
        console.log(" Error loading Script with src : "+src);
        callback(new Error,script);
    }
    document.head.append(script);
}

function message(error,script){
    if(error){
        console.log(error);// throws error
        return;
    }
    
    else{
        alert('script is loaded');
        alert(script.src);
        return;
    }
   
}
loadScript('https://www.faceb3ook.com',message);// intentionally given invalid src to check error handling
