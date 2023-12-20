let marks_class12=[80,90,85,70,75];
console.log(marks_class12);
//Unlike c++ and java, array in javascript can
//be collection of different datatypes
let array=[true,"bhavesh",1,null,undefined];
console.log(array);
// to acess array values
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
// to find length of array
console.log("Length of array is : ",array.length);
// will be undefined because index 5 not exist
console.log(array[5]);
// we can change values of array
array[5]="dwaram";//adding new value
array[3]=90;// changing existing value
console.log(array[5]);// the array length automatically changed
console.log("Length of array is : ",array.length);
console.log(typeof array[5]);//prints type of array element
//In javascript all arrays are objects 
console.log(typeof array,"\n\n");//typeof will return object to console 

//printing array elements using loops
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
