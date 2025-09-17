//Arreglo vacio
let nombres =[];

//Funcion lara agregar un nombre al arreglo
function agregarNombre(){
    let nombre = prompt("Ingresa el nombre: ");
    if(nombre){
        nombres.push(nombre);
        alert(`El nombre es: ${nombre} - agregado exitosamente!` );
    }else{
        alert(`El nombre esta vacio`);
    }
}

function mostrarNombres(){
    if(nombres.length === 0){
        alert(`No hay datos almacenados`);
    }else{
        let mensaje = "Nombres almacenados: \n";
        /* nombres.forEach((nombre, index)=>{
            mensaje += `${index+1}. ${nombre}\n`
        });
        alert(mensaje); */
        for (let i = 0; i < nombres.length; i++) {
        mensaje += `${i + 1}. ${nombres[i]}\n`;
}


    }

function mostrarMenu(){
    let optio
}
}