const dados = require('./modules/dados.js');
const calculadora = require('./modules/module.js')

function Conta(titular, numero, tipo, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
}

let listaContas = [];
for (let i = 0; i < dados.length; i++) {
    listaContas.push(new Conta(dados[i].titular, dados[i].numero, dados[i].tipo, dados[i].saldo));
}
console.log(listaContas);

function mediaContas(){
    let result = 0;
    for (let i = 0; i < dados.length; i++){
        result = calculadora.soma(result, dados[i].saldo)
    }
    return calculadora.dividir(result, dados.length);
}

console.log(mediaContas())
