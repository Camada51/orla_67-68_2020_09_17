// JavaScript source code
var arrayCarrusel=[];
var imgDir = "imgCarrusel/";
var i = 0;

function ini() {
    arrayCarrusel = dirCarrusel.split(",");
    
//    document.getElementById("carruselDiv").style.height = document.getElementById("carruselDiv").style.height * parent.escala.valueOf()

 
//    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[i];
}
function siguiente() {
    if (i < arrayCarrusel.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[i];
}
function anterior() {
    if (i > 0) {
        i--;
    }
    else {
        i = arrayCarrusel.length-1;
    }
    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[i];
}