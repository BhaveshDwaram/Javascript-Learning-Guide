const arr=["S","W","G"];
let input =(prompt("Enter S or W or G").toUpperCase());
let rand=arr[Math.floor(Math.random()*arr.length)];
switch(input){
    case 'S':
            if("S"===rand){
                alert("Both snakes cancel out each other,ITS A TIE");
            }
            else if(rand=="W")
            {
                alert("Snake drinks water ,YOU WIN !");
            }
            else{
                alert("Snake gets killed by gun ,YOU LOOSE ");
            }
        break;

    case 'W' :
        if("W"===rand){
            alert("Both Water cancel out each other, ITS A TIE");
        }
        else if(rand=="G")
        {
            alert(" Water damages Gun ,YOU WIN !");
        }
        else{
            alert("Water gets drink by snake ,YOU LOOSE ");
        }
        break;
    
    case 'G' :
        if("G"===rand){
            alert("Both guns cancel out each other, ITS A TIE ");
        }
        else if(rand=="S")
        {
            alert("Gun kills snake ,YOU WIN !");
        }
        else{
            alert("Gun gets damaged by water ,YOU LOOSE ");
        }
        break;
 }
