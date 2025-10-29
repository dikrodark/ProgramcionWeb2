let turno = "X";
let celdas = ["", "", "", "", "", "", "", "", ""];
let mensaje = document.getElementById("mensaje");
let botonReiniciar = document.getElementById("reiniciar");

for (let i = 0; i < 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", function () {
        jugar(i);
    });
}

function jugar(i) {
    if (celdas[i] === "") {
        celdas[i] = turno;
        document.getElementById(i.toString()).innerText = turno;

        if (ganador(turno)) {
            mensaje.innerText = `Gano: ${turno}`;
            bloquearTablero();
            return;
        }

        if (!celdas.includes("")) {
            mensaje.innerText = "Empate";
            return;
        }

        turno = turno === "X" ? "O" : "X";
        mensaje.innerText = `Turno de: ${turno}`;
    }
}

function ganador(player) {
    const combinacionesGanadoras = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ];

    return combinacionesGanadoras.some(combo =>
        combo.every(index => celdas[index] === player)
    );
}

function bloquearTablero() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i.toString()).style.pointerEvents = "none";
    }
}

botonReiniciar.addEventListener("click", function () {
    turno = "X";
    celdas = ["", "", "", "", "", "", "", "", ""];
    mensaje.innerText = "Turno de: X";

    for (let i = 0; i < 9; i++) {
        document.getElementById(i.toString()).innerText = "";
        document.getElementById(i.toString()).style.pointerEvents = "auto";
    }
});
