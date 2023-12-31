/*
Event is a signal  that something has happened. All DOM genereate such signals
some important DOM events are :-
Mouse EVents:- click , context menu(right click),mouseover/mouseout,mosuedown/mouseup,mousemove
Keyboard events : keydown and keyup
form element events : submit,focus etc
Document Events : Document content loaded
*/
let a=document.getElementsByClassName("button")[0];
a.onclick=()=>{
    let b=document.getElementsByClassName("button")[0];
    b.innerHTML= "<h1>Hello World</h1>"// change the html after clicking button
}
// here there are 2 onclicks one in js and in html inline
// JS file event handling > html file inline event handling(it overrides)