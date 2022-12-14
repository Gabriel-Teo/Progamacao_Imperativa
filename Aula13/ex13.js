const dados = [
    {"titular": "Abigael Natte", "numeroConta" : 5486273622, "tipo" : "corrente", "saldo" : 27771},
    {"titular": "Ramon Connell", "numeroConta" : 1183971869, "tipo" : "poupanca", "saldo" : 8675},
    {"titular": "Jarret Lafuente", "numeroConta" : 9582019689, "tipo" : "poupanca", "saldo" :27363},
    {"titular": "Ansel Ardley", "numeroConta" : 1761924656, "tipo" : "poupanca", "saldo" :32415},
    {"titular": "Jacki Shurmer", "numeroConta" : 7401971607, "tipo" : "poupanca", "saldo" :18789},
    {"titular": "Jobi Mawtus", "numeroConta" : 630841470, "tipo" : "corrente", "saldo" :28776},
    {"titular": "Thomasin Latour", "numeroConta" : 4223508636, "tipo" : "corrente", "saldo" :2177},
    {"titular": "Lonnie Verheijden", "numeroConta" : 185979521, "tipo" : "poupanca", "saldo" :25994},
    {"titular": "Alonso Wannan", "numeroConta" : 3151956165, "tipo" : "corrente", "saldo" :7601},
    {"titular": "Bendite Huggett", "numeroConta" : 2138105881, "tipo" : "poupanca", "saldo" :33196},
];


function Conta(titular, numero, tipo, saldo) {
    this.titular = titular;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = saldo;
}

// let conta1 = new Conta(dados[0].titular, dados[0].numero, dados[0].tipo, dados[0].saldo);
// let conta2 = new Conta(dados[1].titular, dados[1].numero, dados[1].tipo, dados[1].saldo);
let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
    listaContas.push(new Conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo) );
}
console.log(listaContas);