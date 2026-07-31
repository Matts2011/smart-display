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
