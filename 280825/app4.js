let numero1 = parseInt(prompt("Ingresa tu primer numero:"));
let numero2 = parseInt(prompt("Ingresa segundo numero:"));
let numero3 = parseInt(prompt("Ingresa tercer numero:"));

if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los 3 números son iguales");
} else {
    var mayor = numero1;
    var menor = numero1;

    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }

    if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 < menor) {
        menor = numero3;
    }

    console.log("El numero mayor es: " + mayor + ", el numero menor es: " + menor);
}

        