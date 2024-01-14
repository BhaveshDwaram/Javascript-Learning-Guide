//Q1

// const LoadScript =async (src)=>{
//     return new Promise((resolve,reject)=>{
//         let script=document.createElement("script");
//         script.src=src;
//         script.onload=()=>{
//             resolve(src+" Done Success");
//         }
//         document.body.append(script)
//     })
// }

// console.log(new Date().getMilliseconds());  
// LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js").then((value)=>
// {
//     console.log(value); 
//     console.log(new Date().getMilliseconds());
// })



  
//Q2
// const func= async()=>{
//     console.log(new Date().getMilliseconds());
//     let a= await LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
//     console.log(new Date().getMilliseconds());

// }

// func();

//Q3
// let p=()=>{
//        return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("This is not acceptable"));
//         },3000)
// })
// }

// let a=async ()=>{
//     try{
//         let c =await p()
//         console.log(c);
//     }
//    catch(error){
//     console.log("The Error --" +error +" --has been Handled ");
//    }
// }

// a();

// Q4
let p1=async()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000);
})
}
let p2=async()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
    },1000);
})
}

let p3=async()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },3000);
})
}

const run= async()=>{
    console.time("run")
    // more time
    // let a1=await p1()// fetch first 10 from database
    // let a2=await p2()// fetch another 10
    // let a3=await p3()// fetch yet another 10

    // less time
    let a1= p1()// fetch first 10 from database
    let a2= p2()// fetch another 10
    let a3= p3()// fetch yet another 10
    
    let a1a2a3=await Promise.all([a1,a2,a3])
    console.log(a1a2a3) // this takes just more than 3 seonds
   // console.log(a1,a2,a3); //this takes more than 6 seconds 
    console.timeEnd("run")

}

run();