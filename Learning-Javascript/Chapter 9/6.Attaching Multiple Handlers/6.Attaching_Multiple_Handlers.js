let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert("Hey I am Solved");
        resolve(1);
    },2000);
})
// attaching multiple handlers

// This handler will execute first 
p1.then(()=>{
    console.log("Congratulations this promise is now resolved");
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is a chaining statement");
        },3000);
    }).then((value)=>{ // this is chaining and the information gets passed from above
        console.log(value);
    })
})

// This handler will execute after first one and the first handler don't pass any info and all 
// attached promises run independently
p1.then(()=>{
    console.log("Hurray !");
})