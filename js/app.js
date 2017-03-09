var estudiantes = [];

function obtenerListaEstudiantes(estudiantes) {
    // TO DO: Retornar la lista de estudiantes
    /*var listaEst = "";
    for(var i=0; i<estudiantes.length; i++){
      listaEst += estudiantes[i].nombre + "<br>" + estudiantes[i].puntosTecnicos + "<br>" + estudiantes[i].puntosHse + "<br>";
    }
    return listaEst; */


}

function agregarEstudiante(estudiante) {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    // *** Función constructora para estudiante ***
    var estudiante = function(nombre,puntosTecnicos,puntosHse){
      this.nombre = nombre;
      this.puntosTecnicos = puntosTecnicos;
      this.puntosHse = puntosHse;
    };

    // *** Para pedir los datos de cada estudiante ***

    estudiante.nombre = prompt("Nombre de estudiante");
    estudiante.nombre = estudiante.nombre.toUpperCase();
    estudiante.puntosTecnicos = prompt("Puntaje Técnico");
    estudiante.puntosHse = prompt("Puntaje Habilidades Socio Emocionales");
    estudiantes.push(estudiante);

    // Prueba para checar que se guarden los datos en el arreglo:
    console.log(estudiantes);

    // *** Mostrar datos de última estudiante agregarEstudiante ***
    // pffff!!! AQUI NO ERA JAJAJAJAJAJAJAJAJAJAJAJA (ya estoy al borde de la histeria)
    /*
    //1er intento:
    document.getElementById(resultado).innerHTML = (estudiantes[estudiantes.length-1].nombre + "<br>" +
    estudiantes[estudiantes.length-1].puntosTecnicos + "<br>" +
    estudiantes[estudiantes.length-1].puntosHse);
    */
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    // 2o intento
    var resultado = estudiantes[estudiantes.length-1];
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiantes[estudiantes.length-1].nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[estudiantes.length-1].puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[estudiantes.length-1].puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    for(var i=0; i<estudiantes.length; i++){
      var resultado = estudiantes[i];
      resultado += "<div class='row'>";
      resultado += "<div class='col m12'>";
      resultado += "<div class='card blue-grey darken-1'>";
      resultado += "<div class='card-content white-text'>";
      resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
      resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTecnicos + "</p>";
      resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHse + "</p>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";

    }
    return resultado;

/*
    var listaEst = "";
    for(var i=0; i<estudiantes.length; i++){
      listaEst += estudiantes[i].nombre + "<br>" + estudiantes[i].puntosTecnicos + "<br>" + estudiantes[i].puntosHse + "<br>";
    }
    return(listaEst);
*/
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    nombre = nombre.toUpperCase();
    //estudiantes.filter(valor, i, )

/*
    cantEstudiantes = estudiantes.length;
    for(var i=0; i < cantEstudiantes; i++){
      if(estudiantes[i].nombre == nombre){
        var resultado = estudiantes[i];
        resultado += "<div class='row'>";
        resultado += "<div class='col m12'>";
        resultado += "<div class='card blue-grey darken-1'>";
        resultado += "<div class='card-content white-text'>";
        resultado += "<p><strong>Nombre:</strong> " + estudiantes[i].nombre + "</p>";
        resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[i].puntosTecnicos + "</p>";
        resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[i].puntosHse + "</p>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        resultado += "</div>";
        return resultado;

      }
    }*/

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
