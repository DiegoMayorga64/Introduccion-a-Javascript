var imput1= document.getElementById("max");
var imput2= document.getElementById("min");

var boton=document.getElementById("btn"); 

var texto=document.getElementById("number");

boton.addEventListener("click", function(){

    var nMax= imput1.value;
    var nMin= imput2.value;

    texto.innerHTML = generarNumero(nMax,nMin);
});

function generarNumero(n1, n2){
    return Math.round(Math.random() * (n1 - n2) + n2);
}

