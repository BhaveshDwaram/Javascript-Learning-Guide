// // here addEventListener is used to assign multiple handlers to an event
// // addEventListener(event,handler)

// btn.addEventListener('click',function(e){
//     alert("Hello World 1");
// })

// btn.addEventListener('click',function(e){ 
//     alert("Hello World 2");
// })

// // if we want to remove the second handler for certain conditions


// btn.addEventListener('click',function(e){
//         alert("Hello World 1");
//     })
    
//     btn.addEventListener('click',function(e){ 
//         alert("Hello World 2");
//     })

//     let b=prompt("Enter the number");
//     /*
//     This type of declaration of removeEventListener don't remove the 
//     event because function mentioned in the remove given  different object 
//     than the actual handler object which we want to remove
//     */
// if(b==2){
//     btn.removeEventListener('click',function(e){
//         alert("Hello World 2");
//     });
// }

// //NOTE:- HANDLER MUST BE SAME FUNCTION OBJECT FOR THIS TO WORK
let x=function(e){
    alert("Hello World 1");
    console.log(e);//here e is a event object which is passed as argument to a event
    console.log(e.target,e.type,e.clientX,e.clientY);// this is the target
}

let y=function(event){
    alert("Hello World 2");
    console.log(event);//here e is a event object which is passed as argument to a event
    console.log(event.target,event.type,event.clientX,event.clientY);// this is the target
}

btn.addEventListener('click',x);
btn.addEventListener('click',y);
let a=prompt("Enter the number");
if(a==2){
    btn.removeEventListener('click',y);// if a=2 this will stop y handler
}
