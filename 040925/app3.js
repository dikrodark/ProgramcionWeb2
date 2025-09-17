function saludar (nombre){
    console.log("Hola " + nombre);
}

//SUMA

function sumar (n1, n2){
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt("Numero 1: ");
let numero2 = prompt("Numero 2: ");

var resultado = sumar(numero1,numero2);
console.log("El total de la suma es: " + resultado);

//RESTA

function restar (n1, n2){
    return parseInt(n1) - parseInt(n2);
}

var resultado = restar(numero1,numero2);
console.log("El total de la resta es: " + resultado);

//DIVISION

function division (n1, n2){
    if 
    (n1 != 0, n2 != 0) {
    return parseInt(n1) / parseInt(n2);
    } else if (n1 == 0){
        return console.log("Es indeterminado");
    } else if (n2 == 0) {
        return console.log("No se puede dividir entre 0");
    }
}

var resultado = division(numero1,numero2);


console.log("El total de la division es: " + resultado);

//MULTIPLICACION

function multiplicacion (n1, n2){
    return parseInt(n1) * parseInt(n2);
}

var resultado = multiplicacion(numero1,numero2);
console.log("El total de la multiplicacion es: " + resultado);