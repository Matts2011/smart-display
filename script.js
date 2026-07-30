// ===== RELOJ =====
function actualizarHora() {
    const ahora = new Date();

    const hora = ahora.toLocaleTimeString("es-EC", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const fecha = ahora.toLocaleDateString("es-EC", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    document.getElementById("clock").textContent = hora;
    document.getElementById("date").textContent =
        fecha.charAt(0).toUpperCase() + fecha.slice(1);
}

setInterval(actualizarHora, 1000);
actualizarHora();


// ===== FOTOS =====

const fotos = [
    "Screenshots/foto1.jpg",
    "Screenshots/foto2.jpg",
    "Screenshots/foto3.jpg",
    "Screenshots/foto4.jpg",
    "Screenshots/foto5.jpg"
];

let fotoActual = 0;

function cambiarFoto() {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    document.getElementById("photo").src = fotos[fotoActual];

    document.getElementById("photoCounter").textContent =
        (fotoActual + 1) + " / " + fotos.length;
}

document.getElementById("photoCounter").textContent =
"1 / " + fotos.length;

setInterval(cambiarFoto,10000);


// ===== RECORDATORIOS =====

let notas =
JSON.parse(localStorage.getItem("notas")) || [];

const lista =
document.getElementById("noteList");

function guardarNotas(){

localStorage.setItem(
"notas",
JSON.stringify(notas)
);

}

function dibujarNotas(){

lista.innerHTML="";

notas.forEach((texto,indice)=>{

const li=document.createElement("li");

li.innerHTML=`
<span>${texto}</span>
<button class="deleteBtn">✕</button>
`;

li.querySelector("button").onclick=()=>{

notas.splice(indice,1);

guardarNotas();

dibujarNotas();

};

lista.appendChild(li);

});

}

document
.getElementById("addBtn")
.onclick=()=>{

const input=
document.getElementById("newNote");

const texto=
input.value.trim();

if(texto==="") return;

notas.push(texto);

guardarNotas();

dibujarNotas();

input.value="";

};

dibujarNotas();
