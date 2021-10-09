import {Temporizador} from "./cronometro.js"
import {Dados} from "./dados.js"

let temporizador = new Temporizador();
let dados = new Dados()
let recarregar = dados.recuperaCronometro()

document.querySelector("#tens").innerHTML = recarregar[1].toString().padStart(2, "0")
document.querySelector("#seconds").innerHTML = recarregar[0].toString().padStart(2, "0")

temporizador.segundos = recarregar[0]
temporizador.dezenasMilissegundos = recarregar[1]


var btnStart = document.querySelector('#button-start');
var btnStop = document.querySelector('#button-stop');
var btnReset = document.querySelector('#button-reset');

btnStart.addEventListener("click", function () {
  temporizador.iniciar();
});

btnStop.addEventListener("click", function () {
  temporizador.parar();
  dados.salvarCronometro(temporizador.segundos, temporizador.dezenasMilissegundos)
});

btnReset.addEventListener("click", function () {
  temporizador.reset();
  dados.salvarCronometro(temporizador.segundos, temporizador.dezenasMilissegundos)
});




