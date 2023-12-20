/*
Map are bit similar to for each loop
In map new array is created by performing 
some operation on each array element.
array.map((value,index,array)=>{
    //function logic
}) format of map
*/
let arr=[34,24,67,89,122];
let arr2=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+index;
})
console.log("Original array : ",arr,"mapped array :",arr2);
// Array Filter Method
let arr3= arr2.filter((value)=>{
    return value<100;
})
console.log("Original array : ",arr2,"filtered array :",arr3);
//Array Reduce Method
// reduces an array to a single value
let arr4=arr2.reduce((h1,h2)=>{
    return h1+h2;
})
console.log("Original array : ",arr2,"Reduced array :",arr4);
let value=(h1,h2)=>{
    return h1+h2;
}
let newarr=arr3.reduce(value);
console.log("Original array : ",arr3,"Reduced array :",newarr);

