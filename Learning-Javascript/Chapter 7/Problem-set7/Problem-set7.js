const change_color=()=>{
    //document.getElementsByTagName("nav")[0].style.background="red"; // alternate
    document.body.firstElementChild.style.background="red";
}
//q2
/* if we view page soure we can't find tbody but through developer tools its possible */

const change_child_color=()=>{
   document.getElementById("child1").style.background="green";
   document.getElementById("child3").style.background="green";
}
const change_li=()=>{
    Array.from(document.getElementsByTagName("li")).forEach((element)=>{ // for each works for array only
        element.style.background="cyan";
    })
}