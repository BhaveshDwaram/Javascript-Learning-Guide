alert("Enter a Number!");//used to invoke a mini window with a msg
            let a=prompt("Enter here","578")//used to take input as a string
            //second argument acts as default value
            document.write(a);
            alert("You entered a as a type of : "+(typeof a));// prompts take input as string
            a=Number.parseInt(a);
            alert("After Parsing the type is : "+(typeof a));// prompts take input as string
            let write=confirm("Do you want to write in page ? ");
            if(write){
                document.write(a);
            }
            else{
                document.write("Please allow me to write ");
            }