// //Q1
// canDrive=()=>{
// let age=prompt("Please Enter your age ");
// age=Number.parseInt(age);
//     if(age<18&&age>=0)
//     {
//         alert("You cannot drive !");
//     }
//     else if(age>=18){
//         alert("You can drive");
//     }
//     //Q3
//     else{
//         console.error("Age cannot be negative");
//     }
// }
// canDrive();
// //Q2
// if(confirm("Do you want to see the prompt again ?"))
// {
// canDrive();
// }

// //Q4
// check=()=>{
//     let value=prompt("Enter the input ");
//     value=Number.parseInt(value);
//     if(value>4){
//         location.href="https://google.com";
//     }
// }
// check();

//Q5
check=()=>{
    let usercolor=prompt("Enter the background colour ");
    if(usercolor!=null&&usercolor!=""){
        document.body.style.background=usercolor;
    }
    else{
        alert("Enter correct value !");
        check();    
    }
}
check();