let x=document.getElementsByTagName("span")[0];
console.log(x);// this cons.log returns element dom tree
console.dir(x);// shows element as object with its properties
//node name will return any type of node comment or text or element
console.log(document.body.firstChild.nodeName);//returns text
console.log(document.body.firstElementChild.nodeName);// returns span
let first=document.getElementById("first");
console.log(first.innerHTML);//first is the id Inner html prints the inside element as string. Valid only for elements
//first.innerHTML="<b>HI HELLO</b><i>Hey I am Itallic</i>"//sets new value to innerHTML
console.log(first.innerHTML);// new value
console.log(first.outerHTML);// outerhtml=innerhtml+elementitself
//first.outerHTML="<div>Hey</div>"// sets new value to outerHtml
console.log(document.body.firstChild.data);//for other nodes which are not element we can use nodeValue or data
console.log(document.body.firstChild.nodeValue);// same as data
console.log(document.body.textContent);//all the text minus tags
console.log(document.getElementById("first").textContent);//all the text minus tags
/* hidden if we use for any tag all the content gets hidden . we can change 
it in console by selecting that and $0.hidden=false; or first.hidden=false */
//first.hidden=false