let incognita = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(incognita);

let numero= parseInt(prompt("Adivina el numero"));
let vidas = 3;


while( incognita  !== numero && vidas > 1 ){
    vidas --;
    numero = parseInt(prompt("Vuelve a intentar adivinar el numero. Vidas->"+vidas));

}

if(numero === incognita){
    alert("Ganaste")
}else{
    alert("Perdiste")
}