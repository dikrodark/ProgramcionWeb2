// Arreglo para almacenar tareas
let tareas = [];

// Función mostrar opciones del menú
function mostrarTareas() {
    return parseInt(prompt(`
        Opciones Disponibles:
        1.- Agregar tarea.
        2.- Ver todas las tareas.
        3.- Marcar tarea como completada.
        4.- Eliminar tarea.
        5.- Salir.
        "Elige una opción"
    `));
}

// Función para agregar tarea
function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("La tarea se agregó de manera exitosa");
    } else {
        alert("El nombre de la tarea no puede estar vacío");
    }
}

// Función para ver todas las tareas
function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista");
    } else {
        let mensaje = "Lista de tareas:\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

// Función para marcar tarea como completada
function marcarTareaCompletada() {
    if (tareas.length === 0) {
        alert("No hay tareas para completar");
        return;
    }

    let indice = parseInt(prompt("Introduce el número de la tarea que deseas marcar como completada")) - 1;

    if (indice >= 0 && indice < tareas.length) {
        if (!tareas[indice].completado) {
            tareas[indice].completado = true;
            alert(`La tarea "${tareas[indice].nombre}" ha sido marcada como completada.`);
        } else {
            alert(`La tarea "${tareas[indice].nombre}" ya estaba completada.`);
        }
    } else {
        alert("Número de tarea no válido");
    }
}

// Función para eliminar tarea
function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar");
        return;
    }

    let indice = parseInt(prompt("Introduce el número de la tarea que deseas eliminar")) - 1;

    if (indice >= 0 && indice < tareas.length) {
        let eliminada = tareas.splice(indice, 1);
        alert(`La tarea "${eliminada[0].nombre}" ha sido eliminada.`);
    } else {
        alert("Número de tarea no válido");
    }
}

// Función principal para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;

    while (continuar) {
        let opcion = mostrarTareas();

        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
            alert("Adios");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }

    alert("Programa finalizado ");
}

// Iniciar el programa
iniciarPrograma();