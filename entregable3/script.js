"use strict";


function mostrarOcultar() {
var div1=document.getElementById("BotonDiv1");
var div2=document.getElementById("BotonDiv2");

if (div1.style.visibility === 'hidden') {
    div1.style.visibility = 'visible';
    div2.style.visibility = 'hidden';
} else {
    div1.style.visibility = 'hidden';
    div2.style.visibility = 'visible';
}
}
var boton1=document.getElementById("#boton1");
var boton2=document.getElementById("#boton2");
boton1=document.addEventListener("click",mostrarOcultar);
boton2=document.addEventListener("click",mostrarOcultar);
