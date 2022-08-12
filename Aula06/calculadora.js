function soma(num1,num2) {
    return num1 + num2;
}

function subtrair(num1,num2) {
    return num1 + num2;
}

function dividir(num1,num2) {
    return num1 / num2;
}

function multiplicar(num1,num2) {
    return num1 * num2;
}

function quadradoNum(power){
    return multiplicar(power, power)
}

function mediaDeTresNum(num1,num2,num3){
    let somaNum1eNum2eNum3 = soma(soma(num1,num2), num3);
    return dividir(somaNum1eNum2eNum3, 3)
}

function porcentagem(num1, num2) {
    let rDivisao = dividir(num1, 100);
    return multiplicar(num2, rDivisao)
}

function qualPorcento(num1, num2) {
    let rMulti = multiplicar(num1, 100);
    return dividir(rMulti, num2)
}




var num1 = 2;
var num2 = 200;
var num3 = 300;

console.log('========Teste de Calculadora========')
console.log('input1: ' + num1 + '  // input2: ' + num2 + ' // imput3: ' + num3)
console.log('soma de ' + num1 + ' e ' + num2 + ' é ' + soma(num1,num2));
console.log('subtração de ' + num1 + ' de ' + num2 + ' é ' + subtrair(num1,num2));
console.log('divisao de ' + num1 + ' por ' + num2 + ' é ' + dividir(num1,num2));
console.log('multiplicação de ' + num1 + ' por ' + num2 + ' é ' + multiplicar(num1,num2));
console.log(num1 + ' ao quadrado é: ' + quadradoNum(num1) + ' e ' + num2 + ' ao quadrado é: ' + quadradoNum(num2));
console.log('a média entre ' + num1 + ',' + num2 + ', e ' + num3 + ' é: ' + mediaDeTresNum(num1, num2, num3));
console.log(num1 + '% de ' + num2 + ' é ' + porcentagem(num1, num2) );
console.log(num1 + ' de ' + num2 + ' representa: ' + qualPorcento(num1,num2) + '%');