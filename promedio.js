
function calcularNotas(primerTrimestre, segundoTrimestre, tercerTrimestre) {

    let resultado = primerTrimestre + segundoTrimestre + tercerTrimestre;

    return resultado / 3;
}

let nota = prompt("A continuacion ingrese su nombre y apellido para comenzar");


while (nota != "salir") {

    primerTrimestre = parseFloat(prompt("ingrese la nota de su primer trimestre"));

    segundoTrimestre = parseFloat(prompt("ingrese la nota de su segundo trimestre"));

    tercerTrimestre = parseFloat(prompt("ingrese la nota de su tercer trimestre"));

    let promedio = calcularNotas(primerTrimestre, segundoTrimestre, tercerTrimestre);

    alert(`tu promedio es: ${promedio}`);

    if (promedio >= 7) {

        alert("usted promociono la materia");
    } else {

        alert("tienes que recursar la materia");
    }

    nota = prompt("ingrese nuevamente los datos o escriba salir");

}


