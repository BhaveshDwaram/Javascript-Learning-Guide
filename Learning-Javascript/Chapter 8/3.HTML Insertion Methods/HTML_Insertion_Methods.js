// // one method to insert html into already existing element
let b= document.getElementsByTagName("div")[0];
// b.innerHTML=b.innerHTML + "<h1>Hello World</h1>";
// //insert html by creating new element   
let div=document.createElement("div");
div.innerHTML="<h2>This is Html insertion</h2>";
 //b.append(div); // append at end of node
//  b.prepend(div); // insert at begining of node
 //b.before(div);//insert before node(in this case out of div container )
//  b.after(div);//insert after node(in this case out of div container )
b.replaceWith(div);//replace exsisting node with given node