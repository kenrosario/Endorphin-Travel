
const imagenes = document.querySelectorAll(".destino");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let indiceActual = 0;

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
