import {Temporizador} from "./cronometro.js"
import {Dados} from "./dados.js"

recuperaCronometro()

let temporizador = new Temporizador();

var btnStart = document.querySelector('#button-start');
var btnStop = document.querySelector('#button-stop');
var btnReset = document.querySelector('#button-reset');

btnStart.addEventListener("click", function () {
  temporizador.iniciar();
});

btnStop.addEventListener("click", function () {
  temporizador.parar();
  let dados = new Dados(temporizador.segundos, temporizador.dezenasMilissegundos)
  dados.salvarCronometro()
});

btnReset.addEventListener("click", function () {
  temporizador.reset();
  dados.salvarCronometro()
});

function recuperaCronometro() {
  let recuperaSegundos = localStorage.getItem("dado-segundos")
  let recuperaMili = localStorage.getItem("dado-mili")
  let JSONseconds = JSON.parse(recuperaSegundos)
  let JSONmilis = JSON.parse(recuperaMili)
  document.querySelector("#tens").innerHTML = JSONmilis.toString().padStart(2, "0")
  document.querySelector("#seconds").innerHTML = JSONseconds.toString().padStart(2, "0")
}


