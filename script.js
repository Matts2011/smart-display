const fotos = [
    "Screenshots/foto1.jpg",
    "Screenshots/foto2.jpg",
    "Screenshots/foto3.jpg"
];

let numero = 0;
const imagen = document.getElementById("fondo");

function cambiarFoto(){

    imagen.style.opacity = 0;

    setTimeout(() => {

        imagen.src = fotos[numero];

        imagen.onload = () => {
            imagen.style.opacity = 1;
        };

        numero++;

        if(numero >= fotos.length){
            numero = 0;
        }

    },1000);
}

cambiarFoto();
setInterval(cambiarFoto,14000);


function actualizarHora(){

    let ahora = new Date();

    document.getElementById("hora").innerHTML =
    ahora.toLocaleTimeString("es-ES",{
        hour:"2-digit",
        minute:"2-digit",
        hour12:false
    });

    document.getElementById("fecha").innerHTML =
    ahora.toLocaleDateString("es-ES",{
        weekday:"long",
        day:"numeric",
        month:"long"
    });
}

actualizarHora();
setInterval(actualizarHora,1000);
