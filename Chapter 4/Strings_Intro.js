let student="bhavesh";
console.log(student.length);
let friend='raju'; //strings can be declared with both single and double quotes
console.log(friend.length);
//To print each character in string .Can be done using normal for loop
for(let a in student){
    console.log(student[a]);
}
// template literals
//template literals use backtics instead of quotes to define a string

let boy1="bhavesh",boy2="venkata";

// with template literals we can use double quotes
let sentence=`"boy1" is a friend of "boy2"`;
let sentence2=`'boy1' is a friend of 'boy2'`;

//we can insert variables directly into template literals 
//called string interpolation
let sentence3=`${boy1} is a friend of ${boy2}`;

console.log(sentence);
console.log(sentence2);
console.log(sentence3);

//Escape Sequences 
let fruit ='Bana\'na';//it is of 7 characters \' is considered as single character
console.log(fruit,fruit.length);