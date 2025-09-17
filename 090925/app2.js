/* const frutas = ["Banana"];
frutas.push("Sandia");
frutas.unshift("Melon");
frutas.push("Naranja");
frutas.unshift("Durazno");

console.log(frutas);

for (let fruta of frutas){
    console.log(fruta);
}

// ELIMINAR
console.log("...........................................................")
frutas.pop();
frutas.shift();

for (let fruta of frutas){
    console.log(fruta);
} */


const frutas = [];

while (confirm("QUIERES AGREGAR UNA FRUTA A CARRITO?")){
    const fruta = prompt("Agrega tu fruta");
    frutas.push(fruta);
}

console.log("Usted compro");
for (let fruta of frutas){
    console.log(fruta);
}
