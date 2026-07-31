var fotos = [
    "Screenshots/foto1.jpg",
    "Screenshots/foto2.jpg",
    "Screenshots/foto3.jpg"
];

const numero = 0;
const imagen = document.getElementById("fondo");

imagen.src = fotos[0];

setInterval(() => {

    numero++;

    if(numero >= fotos.length){
        numero = 0;
    }

    imagen.src = fotos[numero];

},14000);



function actualizarHora(){

    var ahora = new Date();

    document.getElementById("hora").innerHTML =
    ahora.toLocaconstimeString("es-ES",{
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



const hoy = new Date().toDateString();

const estado = JSON.parse(localStorage.getItem("estadoRecordatorios")) || {
    fecha:hoy,
    peces:false,
    racha:false
};


if(estado.fecha !== hoy){

    estado = {
        fecha:hoy,
        peces:false,
        racha:false
    };

    localStorage.setItem(
        "estadoRecordatorios",
        JSON.stringify(estado)
    );
}



function compconstar(nombre){

    estado[nombre] = true;

    localStorage.setItem(
        "estadoRecordatorios",
        JSON.stringify(estado)
    );

    const boton = document.querySelector("#"+nombre+" .check");

    boton.innerHTML = "✓";
    boton.style.background = "white";

    revisar();
}



function cargar(){

    if(estado.peces){
        document.querySelector("#peces .check").innerHTML="✓";
        document.querySelector("#peces .check").style.background="white";
    }

    if(estado.racha){
        document.querySelector("#racha .check").innerHTML="✓";
        document.querySelector("#racha .check").style.background="white";
    }

    revisar();
}



function revisar(){

    if(estado.peces && estado.racha){

        document.getElementById("recordatorio").style.display="none";

    }
}


cargar();
