let string = "";



let buttons = document.querySelectorAll(".button");
for(i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(event){
        if(event.target.id == 'sign'){
            prepend('-');
        }else if(event.target.innerHTML == 'AC'){
            string = ''
            document.getElementsByTagName("input")[0].value = string;
        }else if(event.target.innerHTML == '='){
            string = eval(string);
            string = string.toString();
            document.getElementsByTagName("input")[0].value = string;
        }else{
            string = string + event.target.innerHTML;
            document.getElementsByTagName("input")[0].value = string;
        }
    });
}



function prepend(x){
    if (firstchar() === '-' ){
        string = string.substring(1,string.length)
        document.getElementsByTagName("input")[0].value = string;
    }else{
        string = x + string;
        document.getElementsByTagName("input")[0].value = string;
    }
    
}


function firstchar(){
    return string.charAt(0);
}

