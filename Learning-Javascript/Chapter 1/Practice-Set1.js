// //Q1
// let a="Bhavesh"
// console.log(a+1);
// //Q2
// console.log(typeof(a));
// //Q3
// const c={
//     name:"Harry",
//     Students :1,
// }
// // c=2; can't reassign new value to const
// //Q4
// c["ram"]=2;
// console.log(c);
// /* Here c is the reference to objects name and student . 
// Since c is constant we cannot change its value. But
// the value of objects can be changed */
//Q5
let dictionary={
    aprreciate :"to enjoy something or to understand the value of somebody/something",
    reverence :"a feeling of great respect",
    obvious :"easily seen or understood; clear",
    obnoxious :"extremely unpleasant, especially in a way that offends people",
    intimidating:"to frighten or threaten somebody, often in order to make him/her do something",
}

console.log(dictionary);//prints entire object.
console.log(dictionary.intimidating);//to access specific object
console.log(dictionary["intimidating"]);