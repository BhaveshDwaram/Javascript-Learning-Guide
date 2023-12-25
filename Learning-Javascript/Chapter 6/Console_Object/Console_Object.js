// Run in browser console for better understanding

//console.log(console);// Print the methods in console objects
console.assert(5>53);// will give message whether assertion is true or not
let obj={
    a :1,
    b :2,
    c :3    
}
console.table(obj);// will give a table for the object index and values
console.warn("Please don't drink soda");// gives a warning (Run in browser console to see difference)
console.info("Hey this is a info");

 /*  
        run this in browser console and check with console side bar
    console.log("console")
    console.info("info")
    console.warn("warn")
    console.error("err")
    console.assert("err"!=false)
    console.assert("err"==false)
    */
/*
for console time run this in browser
console.time();
console.time("a");
console.timeEnd("a");
*/
let i;
console.time("forlop");
for( i=0;i<5;i++)
{
    console.log(5);
}
console.timeEnd("forlop");
i=0;
console.time("While loop");
while(i<5){
    console.log(5);
    i++;
}
console.timeEnd("While loop");