//----Q1----//
console.log("har\"".length);//prints 4 as escape sequence is single character

//----Q2----//
/*
Includes :-The includes() method of String values performs a case-sensitive 
search to determine whether a given string may be found within this string, 
returning true or false as appropriate.
*/
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';
//template literal
console.log(`The word "${word}" ${ sentence.includes(word) ? 'is' : 'is not'} in the sentence`,);

/*
The startsWith() method of String values 
determines whether this string begins with the characters of a specified string, 
returning true or false as appropriate.
*/
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));

/*
The endsWith() method of String values 
determines whether a string ends with the characters of this string, 
returning true or false as appropriate.
 */
const str2 = 'Cats are the best!';

console.log(str2.endsWith('best!'));
// Expected output: true

console.log(str2.endsWith('best', 17));
// Expected output: true

const str3 = 'Is this a question?';

console.log(str3.endsWith('question'));
// Expected output: false


//----Q3----//
let given="DWARAM";
console.log(given.toLowerCase());//converts to lower case

//----Q4----//
let sentence2="Please give Rs 1000";
console.log(sentence2.slice(12));// selects from 12th character to end 

//----Q5----//
sentence2[4]="b";
console.log(sentence2);// no change in 4th character
