/*
window is a global object .
Window represents browser window and it provides several 
methods to control it
*/
console.log(window);// This will list all methods in window object
// window.console.log(window); //alternate method
//DOM represents entire page content as html
console.log(document);//represents entire page as js object
console.log(document.body);// represents entire body as js object
//document.body.style.background="yellow" //can use to apply css style through js
/*
Reason for using js to apply css to html :-
This will help us to apply style based on particular event done by user
EX:- Assume user clicks a button which can be a event now we change
the background colour of page through js as we can't dynamically change\
css style sheet
*/
/* 
BOM:- (Browser object model) represents additional objects provided by the
browser(host enviornment) for working with everything except the document

ALERT/PROMPT/CONFIRM--->these functions are also part of BOM
*/
location.href="https://nie.ac.in";  