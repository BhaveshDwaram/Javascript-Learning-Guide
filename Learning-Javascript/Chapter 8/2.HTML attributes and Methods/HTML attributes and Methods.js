let first=document.getElementById("first");
//getAttribute-> method used to get value of attribute
console.log(first.getAttribute("class"));// gives the value of class attribute that is "hey"
//hasAttribute->method to check for exsistence of attribute
console.log(first.hasAttribute("class"));//returns true
console.log(first.hasAttribute("style"));// returns false
//setAttribute->method to set the value of an attribute
//first.setAttribute("hidden","false");
first.setAttribute("class","true 50");// sets class="true 50"
first.removeAttribute("class");//removes attribute
console.log(first.attributes);// returns namenodeMap instance of attributes
// custom attributes
/* we can create custom atttributes and the ones starting with "data-" are reserved for
  programmer.They are avialable in a property named dataset
  if element has an attribute named "data-one" it is avialable as element.dataset.one
  */
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);