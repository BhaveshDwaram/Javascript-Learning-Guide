// alert("What  is your respose ? ");
// let a= setTimeout(function(){
//     alert("Time out you cant respond now !");
// },5000);
// if(confirm("Do you want to clear the timer ?")){
//     clearTimeout(a);// stop the exceution of settime
// }
// console.log(a);//timer id=1

    const sum=(a,b)=>{
        console.log("Yes I am running "+(a+b));
        a+b;
    }
//    let timerID= setTimeout(sum,1000,2,8);// setTimeout(function,delay,arg1,arg2,...);
   let timerID2= setInterval(function(){
    alert("setinterval");
   },3000); // setTimeout(function,delay,arg1,arg2,...);
  /* set interval arguments are same meaning as settimeout.Only difference
  is set interval runs multiple times where as settimeout runs only once */
  //clearInterval(timerID2);// similar to clearTimeout