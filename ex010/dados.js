export class Dados {
    salvarCronometro(segundos, milissegundos) {
        let salvaSegundos = String(segundos)
        let JSONsegundos = JSON.stringify(salvaSegundos)
        localStorage.setItem("dado-segundos", JSONsegundos)
        let salvaMili = String(milissegundos)
        let JSONMili = JSON.stringify(salvaMili)
        localStorage.setItem("dado-mili", JSONMili)
    }
    recuperaCronometro() {
        let recuperaSegundos = localStorage.getItem("dado-segundos")
        let recuperaMili = localStorage.getItem("dado-mili")
        let JSONseconds = parseInt(JSON.parse(recuperaSegundos))
        let JSONmilis = parseInt(JSON.parse(recuperaMili))
        return [JSONseconds, JSONmilis]
      }
}