let array=[1,3,34,56,100,-1];
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log("\n\n");
//forEach loop calls function for each element in array
/*
array.forEach((value,index,array)=>{
    //function logic
})format of forEach
*/
let element=(item)=>{
    console.log(item*item);
}
array.forEach(element);
console.log("\n\n");
//alternate way
array.forEach((element)=>{
console.log(element*element);
});
// Array.from returns an array from iteratable object
let student="Bhavesh";
let array2=Array.from(student);// returns an array from string
console.log(array2);
//for in loop
for(let i in array2){
    console.log(i);//returns keys of array
}
console.log("\n\n");

for(let i of array2){
    console.log(i);//returns element of array
}
