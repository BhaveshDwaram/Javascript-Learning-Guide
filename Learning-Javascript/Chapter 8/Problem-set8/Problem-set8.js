// //Q1

// let a=document.getElementById("button 1");
// let b=document.getElementById("button 2");
// let c=document.getElementById("button 3");

// let x=function(e){
//     alert("Hi This is alert from element with id : "+e.currentTarget.getAttribute("id"));
// }
// a.addEventListener('click',x);
// b.addEventListener('click',x);
// c.addEventListener('click',x);

// //Q2&Q3
// document.getElementById("google").addEventListener('click',function(){
//     window.location="https://www.google.com";
//     window.focus
// })

// document.getElementById("facebook").addEventListener('click',function(){
//     window.location="https://www.facebook.com";
//     window.focus
// })

// document.getElementById("twitter").addEventListener('click',function(){
//     window.location="https://www.x.com";
//     window.focus
// })


////Q4
// const fetchContent = async (url)=>{
//     con=await fetch(url);
//     let a=await con.json();
//     return a;
// }
// setInterval(async function(){
//     let url="https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url))
// },3000)

setInterval(async function(){
        document.getElementById("bulb").classList.toggle("bulb")
    },300)