bloquearInputUsuario();

const $botonEmpezar = document.querySelector("#empezar");
$botonEmpezar.onclick = function(){
  comenzarjuego();
  actualizarRonda();

  return false;
}

let secuenciaMaquina = [];
let secuenciaJugafor = [];
let ronda = [];

function comenzarjuego(){
    agregarColor();
}

function agregarColor(){
    document.querySelector("#estado").textContent = "turno de la maquina";
    repetirSecuencia();
    const cuadroMaquina = Math.floor(Math.random()*4);
    secuenciaMaquina.push(cuadroMaquina);
    let cantidadDeCuadros = Number(secuenciaMaquina.length);

    setTimeout(
        function(){
            iluminarCuadro(cuadroMaquina);
            desbloquearInputUsuario();
        }, cantidadDeCuadros * 1000
    )

    actualizarRonda();
    secuenciaJugafor = []
}

function iluminarCuadro(cuadroMaquina){
    if (cuadroMaquina === 0){
        iluminarCuadroUno();
    }if (cuadroMaquina === 1){
        iluminarCuadroDos();
    }if (cuadroMaquina === 2){
        iluminarCuadroTres();
    }if (cuadroMaquina === 3){
        iluminarCuadroCuatro();
    }
}

function iluminarCuadroUno(){
    const cuadroUno = document.querySelector("#cuadro-1");
    cuadroUno.style.opacity = 1;
    setTimeout(function(){
        cuadroUno.style.opacity = "";
    }, 500)
}
function iluminarCuadroDos(){
    const cuadroDos = document.querySelector("#cuadro-2");
    cuadroDos.style.opacity = 1;
    setTimeout(function(){
        cuadroDos.style.opacity = "";
    }, 500)
}
function iluminarCuadroTres(){
    const cuadroTres = document.querySelector("#cuadro-3");
    cuadroTres.style.opacity = 1;
    setTimeout(function(){
        cuadroTres.style.opacity = "";
    }, 500)
}
function iluminarCuadroCuatro(){
    const cuadroCuatro = document.querySelector("#cuadro-4");
    cuadroCuatro.style.opacity = 1;
    setTimeout(function(){
        cuadroCuatro.style.opacity = "";
    }, 500)
}

function repetirSecuencia(){
    for (let i = 0; i < secuenciaMaquina.length; i++){
        setTimeout(function(){
            iluminarCuadro(secuenciaMaquina[i])
        }, i
         * 1000)
}}
function bloquearInputUsuario(){
    document.querySelectorAll(".cuadro").forEach(function($cuadro){
        $cuadro.onclick = function(){}
    })
}

function desbloquearInputUsuario(){
    document.querySelector("#estado").textContent = "tu turno"
    document.querySelectorAll(".cuadro").forEach(function($cuadro){
    $cuadro.onclick = selectorDeCuadros;
})
}

function selectorDeCuadros(e){
    $cuadro = e.target;

    if ($cuadro.id === "cuadro-1"){
        secuenciaJugafor.push(0);
        iluminarCuadroUno();
    }if ($cuadro.id === "cuadro-2"){
        secuenciaJugafor.push(1);
        iluminarCuadroDos();
    }if ($cuadro.id === "cuadro-3"){
        secuenciaJugafor.push(2);
        iluminarCuadroTres();
    }if ($cuadro.id === "cuadro-4"){
        secuenciaJugafor.push(3);
        iluminarCuadroCuatro();
    }
    
    for (let i = 0; i < secuenciaJugafor.length; i++){
        if (secuenciaJugafor[i] != secuenciaMaquina[i]){
            perder();
        }
    }
    if (secuenciaMaquina.length === secuenciaJugafor.length && secuenciaMaquina.length != 0){
        bloquearInputUsuario();
        setTimeout(agregarColor, 2000)
    }
}

function perder(){
    document.querySelector("#estado").textContent = "Perdiste, pulsá comenzar para volver a jugar";
    secuenciaMaquina = []
}

function actualizarRonda(){
    for (let i = 1; i <= secuenciaMaquina.length; i++){
        document.querySelector("#ronda").textContent = "ronda " + i
    }
}
