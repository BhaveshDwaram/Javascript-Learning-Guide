let array=[1,2,34,56,87];
//converts array to string
let b=array.toString();
console.log(b);
console.log(typeof b);
//join operator joins all element using a seperator
let c=array.join("_");
console.log(c);
console.log(typeof c);
let d= array.pop()// pops last element and returns it
console.log(array,d);
let e=array.push(87);// push new element and returns length
console.log(array,e);
let f=array.shift();// removes an element from start and return element
console.log(array,f);
let g=array.unshift(1);// adds an element at start and return new array length
console.log(array,g);
delete array[2];// delets particular element from array
console.log(array, array.length);// array length doesn't get affected after deletion
array[2]=34;
let array2=[23,24,98,76];
let array3=[22,19,100,86];
let array4=array.concat(array2,array3);
console.log(array4)