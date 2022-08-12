console.log(Math.random());

function cumprimentar0() {
    console.log("Olá, Seja bem vindo!");
}

function cumprimentar1(nome) {
    const mensagem = "ola, seja bem vindo! "
    console.log (mensagem + nome)
}

cumprimentar0();
cumprimentar1("Fulano de Tal");

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5;
}

multiplicarPorDoisESomarCinco(1);
multiplicarPorDoisESomarCinco(5);
multiplicarPorDoisESomarCinco('cicrano');

const cicrano = 5;
multiplicarPorDoisESomarCinco(cicrano);

console.log(multiplicarPorDoisESomarCinco(cicrano));

const valor = multiplicarPorDoisESomarCinco(cicrano)
console.log(valor);

function calculoMenos(x, y) {
    return x - y
}

console.log(calculoMenos(10,20));


//ATIVIDADE FOR REAL
function polegadaParaCentimetro(polegada) {
    return polegada * 2.54;
}
console.log(polegadaParaCentimetro(10));

function enderecoUrl(url) {
    return 'https://' + url + '.com'
}
console.log(enderecoUrl('google'));


function exclamacao(frase) {
    return frase + '!'
}

console.log(exclamacao('isso é um teste'))

function idadeCachorro(idade) {
    return idade * 7
}
console.log(idadeCachorro(3));

function salarioHora(salario) {
    return salario / 160
}
console.log(salarioHora(1902))

function calculoIMC(altura, peso) {
    let altura2 = altura **2;
    return peso / altura2;
}
console.log(calculoIMC(1.66, 45))

function paraMaiuscula(texto) {
    return texto.toUpperCase()
}
console.log(paraMaiuscula('Teste'))

function tipoString(parametro) {
    console.log(typeof parametro);
}

tipoString(2)

//
function retornarCircunferencia(raio) {
    return 2 * Math.PI * raio;
}
console.log(retornarCircunferencia(66));
