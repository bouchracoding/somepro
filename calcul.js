var ecran= document.getElementById("ecran");


function ecrire(val){
    if(ecran.value.length<18){
        ecran.value += val ;   
    }
    
}
function egal(){
    try{
        ecran.value= eval( ecran.value);
    }catch{
        ecran.value="Error";
    }
    
}
function suppAll(){
    ecran.value ="";
}
function suppOne(){
    ecran.value= ecran.value.slice(0,-1)
}