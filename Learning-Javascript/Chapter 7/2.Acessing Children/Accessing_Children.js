// To access  first child
/*suppouse the tags are like this
<body>(the white space for next line is considered as text vy html)
    <div>
      
    </div>
</body>
 h
*/
console.log(document.body.firstChild);
/*
 we will get text as the firstchild for the above type of arrangement but if we remove spaces and run
 <body><div>

    </div>
</body>

This will give div as first child
 */
console.log(document.body.lastChild);
console.log(document.body.childNodes);
//THESE CHILD WILL GIVE NODES IN THE FORM OF LIST AND WE CANNOT APPLY ARRAY METHODS
/* If we open console and we select any element(highlited in blue) we get a $0 
 at the end of the line. Which can act as reference to it. If we go and enter $0
 in console it will return currently selected element . Similarly $1 previously slected element
 and $2 so on... 
 DOM COLLECTIONS ARE READ ONLY we cannot modify them
 $0.childNodes will give list of child nodes for a live element in the form of list
  */