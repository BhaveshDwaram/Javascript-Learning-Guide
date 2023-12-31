let first=document.getElementById("first");
first.className="red text-dark";
console.log(first.classList);//displays all the classes associated with the id
first.classList.remove("red");// removes red class
first.classList.add("yellow"); //removes yellow class
first.classList.toggle("text-dark"); //toggles b/w remove and add the class(removes here)
first.classList.toggle("text-dark"); //toggles b/w remove and add the class(adds here)
console.log(first.classList.contains("text-dark"));// returns true iff class is in the classList or else false

