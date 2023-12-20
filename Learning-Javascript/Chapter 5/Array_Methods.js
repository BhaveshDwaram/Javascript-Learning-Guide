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
let array4=array.concat(array2,array3);//array concatenation of 3 arrays
console.log(array4);// array array2 array3 are concatenated to form array4

//sort method
//The elements of array gets sorted in alphabetically as if they were strings
/* like number starting with 0 first and then numbers 
starting with 2 and then with 3 so on..*/
array4.sort();
console.log(array4);
//sort method using compare function
compare=(a,b)=>{
//ascending order
return a-b;/* this will return greater than
0 if a>b (or) this will return 0 if a=b
(or) this will return less than 0 if a<b */
}
array4.sort(compare);/*this will take two
elements from array and use compare function 
to decide which is bigger .. */
console.log(array4);
compare2=(a,b)=>{
    //descending order;
    return b-a;
}
array4.sort(compare2);
console.log(array4);

//splice
/*splice(1starg,2ndarg,3,4,5...)
1st argument will say from which index we will delete elements
2nd argument will say how many elements we will delete
remaining arguments are the new elements that are added to array*/
let deleted_values=array4.splice(3,3,1023,-1,3,1000,24);//returns deleted values
console.log(array4);
console.log(deleted_values,typeof deleted_values);
//slice
let newnum=array4.slice(3,5);//slices from index 3 to 4(leave 5)
let newnum2=array4.slice(3);//slices from index 3 to last in new array
let newnum3=array4.slice();//slice entire array
console.log(newnum,newnum2,newnum3);
console.log(array4.reverse());//reverses array elements