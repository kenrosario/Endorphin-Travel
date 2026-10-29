
const imagenes = document.querySelectorAll(".destino");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let indiceActual = 0;

const botonMenu = document.querySelector(".menu-nav");
const opcionesNav = document.getElementById("opcionesnav");

document.querySelectorAll(".viaje").forEach(function(boton) {
    boton.addEventListener("click", function() {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSc2nLWuyj7HEzX77BX48jAdXji1Ds4ORRtCCg0sq1VKBN-zeg/viewform?usp=header", "_blank");
    });
});


botonMenu.addEventListener("click", function () {
    opcionesNav.classList.toggle("active");
});


function mostrarImagen(indice) {
    indiceActual = (indice + imagenes.length) % imagenes.length;

    pista.style.transform = `translateX(-${indiceActual * 100}%)`;
}

siguiente.addEventListener("click", function () {
    mostrarImagen(indiceActual + 1);
});

anterior.addEventListener("click", function () {
    mostrarImagen(indiceActual - 1);
});




