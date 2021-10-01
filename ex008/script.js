import {dividirPorDois, elevarADois} from "./funcoes/funcoes.js"

let botao = document.querySelector("#botao")
let paragrafo = document.querySelector("#paragrafo")
botao.addEventListener("click", () => {
    let input = document.querySelector("#input").value
    paragrafo.innerHTML = dividirPorDois(input)
})

let botao2 = document.querySelector("#botao2")
botao2.addEventListener("click", () => {
    let input = document.querySelector("#input").value
    paragrafo.innerHTML = elevarADois(input)
})
