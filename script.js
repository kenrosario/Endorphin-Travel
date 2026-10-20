
const imagenes = document.querySelectorAll(".imagen");

const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

let indiceActual = 0;

function mostrarImagen(indice) {
    // Ocultar la imagen actual
    imagenes[indiceActual].classList.remove("activa");

    // Calcular la nueva posición
    indiceActual = (indice + imagenes.length) % imagenes.length;

    // Mostrar la nueva imagen
    imagenes[indiceActual].classList.add("activa");
}

siguiente.addEventListener("click", function () {
    mostrarImagen(indiceActual + 1);
});

anterior.addEventListener("click", function () {
    mostrarImagen(indiceActual - 1);
});
