/*
 Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
 Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects 
 the readability and maintainability of the code. 
*/

let words = document.querySelectorAll(".word");

const animateAll = (animate) => {
  setTimeout(() => {
    animate(words[0]); // first callback
    setTimeout(() => {
      animate(words[1]); // second call back
      setTimeout(() => {
        animate(words[2]);// third call back
      }, 1000);
    }, 1000);
  }, 1000);
};

const animate = (word) => {
  word.classList.add("animate");
};
animateAll(animate);
