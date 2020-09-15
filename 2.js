function onda(vemos){
    var i = 0;
    var palabras = "";
    var letra = "a";
    var signos = "";
    while(i < vemos.length){
        while(vemos[i] == " "){ 
        i++
        }
        while(vemos[i]!= " " && i < vemos.length){
            palabras += vemos[i];
            i++;
        }
        if(palabras.endsWith(letra)){
            signos = palabras;
        } else { 
            i++;
        }  
        if(palabras != "" && i < vemos.length){
            palabras += " ";
        }
        }  
    return signos
    }
    
    var locura = "ana paris roberto aristinx anastacix aurorl";
    console.log(onda(locura));
