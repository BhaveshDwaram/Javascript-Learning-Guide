let id1=document.getElementById("id1");
let sp1=document.getElementById("sp1");
console.log(id1);   
// matches compares whether it matches with the given css selector or not
console.log(id1.matches(".class"));//returns false
console.log(id1.matches(".box   "));//returns true
//closest compares the nearest ancestor that matches the given css selector(class id name etc)
console.log(sp1.closest(".span"));// returns null as no ancestor or itself matches selector
console.log(sp1.closest(".box"));// reurns div.#id1.box
//--> for class selector use " . " and for id selector " # "
console.log(sp1.closest("#sp1"));// reurns span.#sp1.box
console.log(sp1.closest("#id1"));// reurns span.#sp1.box
//conatins returns true if element B is inside element A
//(or) when element A== element B
console.log(id1.contains(sp1));// returns true as sp1 is in id1
console.log(sp1.contains(sp1));// returns true as sp1==sp1