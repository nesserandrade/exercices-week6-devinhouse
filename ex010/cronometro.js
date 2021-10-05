export class Temporizador {
  segundos;
  dezenasMilissegundos;
  interval;

  constructor() {
    this.segundos = 0;
    this.dezenasMilissegundos = 0;
    this.interval;
  }

  get spanDezenasMilissegundos() {
    return document.querySelector("#tens");
  }

  get spanSegundos() {
    return document.querySelector('#seconds');
  }

  iniciar() {
    let that = this;
    clearInterval(that.interval);
    this.interval = setInterval(function () {
      that.incrementar();
    }, 10);
  }

  parar() {
    let that = this;
    clearInterval(that.interval);
  }

  reset() {
    let that = this;
    clearInterval(that.interval);
    this.dezenasMilissegundos = 0;
    this.segundos = 0;
    this.spanDezenasMilissegundos.innerHTML = "00";
    this.spanSegundos.innerHTML = "00";
  }

  incrementar() {
    this.dezenasMilissegundos += 1;

    if (this.dezenasMilissegundos >= 9) {
      this.spanDezenasMilissegundos.innerHTML = "0" + this.dezenasMilissegundos;
    }

    if (this.dezenasMilissegundos > 9) {
      this.spanDezenasMilissegundos.innerHTML = this.dezenasMilissegundos;
    }

    if (this.dezenasMilissegundos > 99) {
      this.segundos++;
      this.spanSegundos.innerHTML = "0" + this.segundos;

      this.dezenasMilissegundos = 0;

      this.spanDezenasMilissegundos.innerHTML = "0" + this.dezenasMilissegundos;
    }

    if (this.segundos > 9) {
      this.spanSegundos.innerHTML = this.segundos;
    }
  }
}