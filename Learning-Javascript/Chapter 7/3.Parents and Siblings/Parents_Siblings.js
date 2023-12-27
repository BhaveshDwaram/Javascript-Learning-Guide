/* 
Siblings and Parents :-
    For example head and body are siblings. Sibling has same parent and html is the parent
    in this exmaple
        html
      /     \
     /       \
    head     body

    head is the "previous" or "left" sibling of body.previous is in previous sibling property
    body is the "Next" or "right" sibling of head. next is in next sibling property
*/
console.log("This is the firstchild of body is : ",document.body.firstChild);//div
let a=document.body.firstChild;
console.log("The parent node of div is : ",a.parentNode);//body
console.log("The parent element of div is : ",a.parentElement);//body
// parent node returns parent even if it is not a element . 
// But parent element returns parent only if it is a element otherwise null
//documentElement returns <html> for html document
console.log("The parent node of document element is :  ",document.documentElement.parentNode);// returns document as it is a node
console.log("The parent element of document element is :  ",document.documentElement.parentElement); // returns null as document is not element
console.log(a.firstChild.nextSibling);// returns div of class second
console.log(a.firstChild.nextSibling.className);// returns class name of div