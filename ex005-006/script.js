let botao = document.querySelector("#botao")
let paragrafo = document.querySelector("#paragrafo")
botao.addEventListener("click", () => {
    let input = document.querySelector("#input").value
    paragrafo.innerHTML = dividirPorDois(input)
})

let dividirPorDois = (numero) => {
    return numero/2
}