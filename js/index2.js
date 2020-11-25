//Variable que oculta una de los tiempos verbales
var oculta = 0;
//Variable que nos dice que verbo ha sido elegido en el random
var verboElegido = 0;
//Variable que nos dice que el juego aun no se ha inicializado
var estado = 0;
//Variable que indica que el marcador esta a 0
var marcador = 0;
//Variable que nos indica que nivel tenemos
var nivel = 0;

function numVerbo(_level) {
    nivel = _level
    // document.getElementsByTagName("button").value;
    console.log(value);
    // $("button").click(() => verbo());
    // return value;
}

function verbo() {
    // console.log("El nivel es: " + nivel);

    //Se saca en un boton el nivel que estamos jugando
    // document.getElementById("level").innerHTML = value;

    //Math.floor nos devuelve el número entero 
    //Math.random nos da dentro de un array, el array random

    //Hacemos random el verbo a adivinar, asi no van en orden
    verboElegido = Math.floor(Math.random() * verbos.length);

    //Elegimos de forma random el tiempo verbal que debemos adivinar
    oculta = Math.floor(Math.random() * 3);

    //Texto que indica el verbo en español
    document.getElementById("texto").innerHTML = verbos[verboElegido][3];

    //Se oculta el texto de uno de los botones que es el que debemos adivinar
    //Primer boton
    if (oculta == 0) {
        document.getElementById("boton1").innerHTML = '<input id="caja" class="form-control ">';
    } else {
        document.getElementById("boton1").innerHTML = '<button class="btn btn-block btn-warning">' + verbos[verboElegido][0] + '</button>';
    }
    //Segundo boton
    if (oculta == 1) {
        document.getElementById("boton2").innerHTML = '<input id="caja" class="form-control ">';
    } else {
        document.getElementById("boton2").innerHTML = '<button class="btn btn-block btn-warning">' + verbos[verboElegido][1] + '</button>';
    }
    //Tercer boton
    if (oculta == 2) {
        document.getElementById("boton3").innerHTML = '<input id="caja" class="form-control ">';
    } else {
        document.getElementById("boton3").innerHTML = '<button class="btn btn-block btn-warning">' + verbos[verboElegido][2] + '</button>';
    }
}
verbo();

function comprueba() {
    if (estado == 0) {

        //Lo primero le decimos que estamos jugando de modo que le decimos que el estado es 1
        estado = 1;

        //leemos el contenido de la caja de texto
        var verboLeido = document.getElementById('caja').value;
        //Eliminamos el color del boton de resultado
        document.getElementById("resultado").classList.remove('btn-dark');
        document.getElementById("resultado").classList.remove('btn-success');
        document.getElementById("resultado").classList.remove('btn-danger');

        //Bucle que comprueba si la respuesta es correcta
        if (verbos[verboElegido][oculta] == verboLeido) {
            //Si el texto es correcto, se pone verde el boton de comprobar y aumenta en 1 el marcador
            marcador++;
            document.getElementById("resultado").classList.add('btn-success');
            document.getElementById("resultado").innerText = "¡¡CORRECTO!!";
            document.getElementById("caja").classList.remove();
        } else {
            //Si el texto es incorrecto se pone rojo el valor
            marcador = 0;
            document.getElementById("resultado").classList.add('btn-danger');
            document.getElementById("resultado").innerText = verbos[verboElegido][oculta];
        }
    } else {
        document.getElementById('resultado').classList.add('btn-dark');
        document.getElementById('resultado').innerText = "SIGUIENTE";
        estado = 0;
        verbo();
    }
    //Actualizo el valor del marcador
    document.getElementById('marcador').innerText = marcador;
}