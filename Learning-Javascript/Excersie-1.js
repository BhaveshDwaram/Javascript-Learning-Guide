//Excerise 1 --> Guess The Number

const prompt=require('prompt-sync')();
let rand_num=Math.floor((Math.random()*100)+1);
console.log(rand_num);
let guess,count=0;
do{
    guess=prompt("Enter your guess : ");
    count++;
    if(guess==rand_num){
        break;
    }
    else if(guess>rand_num){
        console.log("Your guess is greater than random number");
    }
    else{
        console.log("Your guess is less than random number");
    }
}while(guess!=rand_num);
console.log("Your Score is : ",(100-count));