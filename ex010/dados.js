export class Dados {
    constructor(segundos, milisegundos) {
        this.segundos = segundos
        this.milisegundos = milisegundos
    }
    salvarCronometro() {
        let salvaSegundos = String(this.segundos)
        let JSONsegundos = JSON.stringify(salvaSegundos)
        localStorage.setItem("dado-segundos", JSONsegundos)
        let salvaMili = String(this.milisegundos)
        let JSONMili = JSON.stringify(salvaMili)
        localStorage.setItem("dado-mili", JSONMili)
    }
}