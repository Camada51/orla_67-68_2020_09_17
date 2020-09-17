//"use strict"
var imgAnt = "";
var escala = 0;
var orlaWidth = 780;
var orlaHeight = 595;
var orlaImagenWidth = 284;
var orlaImagenHeight = 595;
var orlaFotosWidth = 470;
var orlaFotosHeight = 595;
var orlaFotoWidth = 47;
var orlaFotoHeight = 61;
var carruselImgCarrusel = 700;
var XOrlaWidth = 107;



function ini() {
    calcularEscala();
    document.getElementById("creditos").innerHTML = creditosTexto;

    rellenarMenuEventos(); //Se encuentra en 'eventos/js/'

    window.addEventListener('resize', calcularEscala);
    document.getElementById("orlaFotos").style.visibility = "visible";

}
function calcularEscala() {
    var estadoVisibleXOrla = document.getElementById('X_Orla').style.display;

    if (estadoVisibleXOrla === "none" | estadoVisibleXOrla === "") {
        var escX = (((window.innerWidth * 100) / (orlaWidth * 100)) * 994) / 1000;
    }
    else {
        var escX = (((window.innerWidth * 100) / ((orlaWidth + XOrlaWidth) * 100)) * 994) / 1000;
    }
    var escY = (((window.innerHeight * 100) / (orlaHeight * 100)) * 994) / 1000;
    escala = Math.min(escX, escY);
    //    if (escala <= 1) { escala = 1; }
    escala = +(escala.toFixed(4));
    //escala = +1;
    document.querySelector('#lasOrlas').style.transformOrigin = 'center top';
    document.querySelector('#lasOrlas').style.transform = `scale(${escala})`;
}

function ocultarCarrusel(o) {
    document.getElementById('carruselExt').style.display = 'none';
    //document.getElementById(o.id).style.display = 'none';
} 

function mostrarXOrla() {
    var estadoVisibleXOrla = document.getElementById('X_Orla').style.display;
    if (estadoVisibleXOrla === "none" | estadoVisibleXOrla === "") {
        document.getElementById('X_Orla').style.display = "grid";
        document.querySelector('#lasOrlas').style.width = (orlaWidth + XOrlaWidth).toFixed(0) + "px";
    }
    else {
        document.getElementById('X_Orla').style.display = "none";
        document.querySelector('#lasOrlas').style.width =(orlaWidth ).toFixed(0) + "px";
    }
    calcularEscala();
}



// Variables para manejar el carrusel
var directorioEvt;

//Array de los eventos anteriores
var eventos = []; // definir el array vacio

function iniArrayEventos() {
    //rellena el Array con el string que se encuentra en 'eventosString.js'
    eventos = eventosString.split(";");
    for (e in eventos) {
        eventos[e] = eventos[e].split(",");
    }
}


function rellenarMenuEventos() {
    // rellena el menú de los eventos. Se le llama desde iniciar la página principal
    //rellenar la lista de eventos
    iniArrayEventos();

    var t = "";

    uList = document.createElement("UL");
    iList = document.createElement("LI");

    for (e in eventos) {
        t = (parseInt(e) + 1) + " -  " +
            eventos[e][0] +
            "<span style='display:none'>" + eventos[e][1] + "</span>";
        iList.innerHTML = t;
        uList.appendChild(iList.cloneNode(true));
        uList.lastChild.onclick = function () { cual(this); };
    }

    document.getElementById("botonMostrarCarrusel").appendChild(uList);

}

function cual(o) {
    // lee el directorio del evento seleccionado;
    for (var i = 0; i < o.childNodes.length; i++) {
        if (o.childNodes[i].tagName === "SPAN") {
            directorioEvt = o.childNodes[i].innerText;
            break;
        }
    }

    document.getElementById("idIframeCarrusel").src = "eventos/index.html"+"?direvt="+directorioEvt;
    document.getElementById("carruselExt").style.display = "block";
}




//////////////////////

function mostrarDosY(oO) {
    //tomar referencia al elemento sibling siguiente al del evento
    o = oO.nextElementSibling;
    // decidir hacia donde se ajunta la imagen ampliada en función de la situación del ratón
    if (event.clientY < window.innerHeight * .3) {
        o.style.top = "0px";
    }
    //mostrar y calcular las dimensiones
    o.style.display = "inline-block";
    o.style.height = (oO.offsetHeight * 3) + "px";
    o.children[0].style.height = "100%";
    if (o.children.length > 1) {
        o.children[1].style.height = "100%";
        o.style.width = (o.children[0].offsetWidth + o.children[1].offsetWidth + 10).toFixed(0) + "px";
    }
    else {
        o.style.width = (o.children[0].offsetWidth).toFixed(0) + "px";
    }
}
function ocultarDosY(oO) {
    o = oO.nextElementSibling;
    o.style.display = "none";
}


function mostrarMenuEvt(el) {
    if (!el.classList.contains("botonMostrarCarrusel_hover")) {
        el.classList.add("botonMostrarCarrusel_hover");
    }
    else {
        el.classList.remove("botonMostrarCarrusel_hover");
    }
}