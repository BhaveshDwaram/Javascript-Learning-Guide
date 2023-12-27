// change card title to red
let ctitle=document.getElementById("firstcardtitle");
//ctitle.style.color="red";
let ctitles=document.querySelectorAll(".card-title");
//ctitles.style.color="orange"; // it don't work as ctitles is a collection not a single element
console.log(ctitles);
ctitles[0].style.color="red";
ctitles[1].style.color="orange";
ctitles[2].style.color="green";
let thisclass=document.querySelectorAll(".this");
console.log(thisclass);
thisclass[0].style.color="red";
thisclass[1].style.color="blue";
thisclass[2].style.color="cyan";
thisclass[0].style.background="black";
thisclass[1].style.background="purple";
thisclass[2].style.background="orange";
console.log(document.getElementsByTagName("a"));// dont forget "S" in getelementsBytagname
console.log(document.querySelector(".card").getElementsByTagName("a"));
//console.log(document.querySelectorAll(".card").getElementsByTagName("a"));//This don't work as queryseleAll 
//will return a collection instead of single element
console.log(document.getElementsByName("search"));
