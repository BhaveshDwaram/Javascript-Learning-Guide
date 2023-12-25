let fruit="baNA\'na"
//.length prints length of string
console.log(fruit.length);//entire escape sequence considered as single character

//.toUpperCase() prints the upper case version of string
console.log("Upper case : "+fruit.toUpperCase());

//.toLowerCase() prints the lower case version of string
console.log("Lower case : "+fruit.toLowerCase());

//.slice for slicing of string
console.log(fruit.slice(2,5));// include from 2 to 4 . 5 not included
console.log(fruit.slice(2));// include from 2 to end . 

//.replace will replace a particular string with another
console.log(fruit.replace("NA\'na","nana"));

let friend ="venkata"
//.conact helps us to concat two strings
console.log(fruit.concat("is a friend of ",friend," ok"));

let friend2 ="   reddy";
//trim the white space 
console.log(friend2.trim());

/*
 All the changes we are making like friend2.trim(), fruit.replace
 fruit.concat etc. They donot change the original string
 STRINGS ARE IMMUTABLE.
 */
for(let a in friend2){
    console.log(friend2.trim()[a]);
}
for(let a in friend2){
    console.log(friend2[a]);
}