const fotos = [
    "Screenshots/foto1.jpg",
    "Screenshots/foto2.jpg",
    "Screenshots/foto3.jpg"
];

let numero = 0;

function cambiarFoto() {
    numero++;

    if (numero >= fotos.length) {
        numero = 0;
    }

    document.getElementById("fondo").src = fotos[numero];
}

setInterval(cambiarFoto, 10000);

function actualizarHora(){
    let ahora = new Date();

    document.getElementById("hora").innerHTML =
    ahora.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    document.getElementById("fecha").innerHTML =
    ahora.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
        month: "short"
    });
}

actualizarHora();
setInterval(actualizarHora,1000);
