// JavaScript source code

function iniCarrusel() {
    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[indCarrusel];

 //   arrayCarrusel = dirCarrusel.split(",");
    
//    document.getElementById("carruselDiv").style.height = document.getElementById("carruselDiv").style.height * parent.escala.valueOf()

 
//    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[indCarrusel];
}
function siguiente() {
    if (indCarrusel < arrayCarrusel.length-1) {
        indCarrusel++;
    }
    else {
        indCarrusel = 0;
    }
    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[indCarrusel];
}
function anterior() {
    if (indCarrusel > 0) {
        indCarrusel--;
    }
    else {
        indCarrusel = arrayCarrusel.length-1;
    }
    document.getElementById("imgCarrusel").src = imgDir + arrayCarrusel[indCarrusel];
}