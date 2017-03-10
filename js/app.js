var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    // **** Crear objeto estudiante ****
    var nombre = prompt("Nombre de la estudiante:");
    nombre = nombre.toUpperCase();
    var puntosTecnicos = parseInt(prompt("Puntaje Técnico:"));
    var puntosHse = parseInt(prompt("Puntaje en Habilidades Socio-Emocionales:"));
    var estudiante = {
      "nombre": nombre,
      "puntosTecnicos": puntosTecnicos,
      "puntosHse": puntosHse,
    };
    // ***** Guardar objeto estudiante en arreglo estudiantes *****
    estudiantes.push(estudiante);
    // prueba en consola
    console.log(estudiantes);
    return estudiante;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    listaEstudiantes = "";
    for (var i = 0; i < estudiantes.length; i++) {
      listaEstudiantes += mostrar(estudiantes[i]);
    }
    return listaEstudiantes;

}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    nombre = nombre.toUpperCase();
    var encontrada = estudiantes.filter(function(alumna){
      return alumna.nombre == nombre;
    })
    /*var encontrada = [];
    for (var i = 0; i < estudiantes.length; i++) {
      if(estudiantes[i].nombre == nombre){
        encontrada.push(estudiantes[i]);
      }
    }*/
    return encontrada;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenamientoTec = estudiantes.sort(function(itemA,itemB){
      return itemB.puntosTecnicos > itemA.puntosTecnicos;
    });
    return ordenamientoTec;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenamientoHse = estudiantes.sort(function(itemA,itemB){
      return itemB.puntosHse > itemA.puntosHse;
    });
    return ordenamientoHse;
}
