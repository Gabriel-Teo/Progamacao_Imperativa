//1.Loop de Pares
function loopDePares(num) {
    for (var i = 0; i <= 100; i++) {
        let soma = (i + num);
        if (soma % 2 === 0) {
            console.log('o numero é par')
        } else {
            console.log(i)
        }
    }
};
//console.log(loopDePares(12))

//2.Loop ímpares com palavra
function loopDeImpares(num, str) {
    for (var i = 0; i <= 100; i++) {
        let soma = (i + num);
        if (soma % 2 !== 0) {
            console.log(str)
        } else {
            console.log(i)
        }
    }
};
//console.log(loopDeImpares(1,'cavalo'))

//3.Soma
function soma(num) {
    let numArray = []
    for (var i = 0; i <= num; i++) {
        numArray.push(i)
    }
    return numArray.reduce(function (a, i) {
        return a + i;
    })
};
//console.log(soma(90))


//4.Novo Array
function newArray(num) {
    let newArray = []
    for (var i = 1; i <= num; i++) {
        newArray.push(i)
    }
    return newArray;
};
//console.log(newArray(5))

//5.String.split()
function split(str) {
    let newArray = [];
    for (i = 0; i < str.length; i++) {
        newArray.push(str[i])
    }
    return newArray
};
//console.log(split('teste'))

//6. Mover os zeros para o final
var array6 = [false, 2, 5, 9, 0, 5, 0, 3, 0, 'a']
function moverZeros(array) {
    let arrayPrincipal = [];
    let arraySeparador = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            arrayPrincipal.push(array[i])
        } else {
            arraySeparador.push(array[i])
        }
    };
    return arrayPrincipal.concat(arraySeparador);
};
//console.log(moverZeros(array6))

//7.Lidando com dois arrays
let array7a = [1, 2, 3];
let array7b = ['o', 'l', 'a'];
function arrayHandler(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
        console.log('eu sou ' + array1[i] + ' e eu sou ' + array2[i])
    }
};
//console.log(arrayHandler(array7a, array7b))

//8.Arrays de objetos
function arrayObjects(num) {
    let newArray = []
    for (var i = 1; i <= num; i++) {
        newArray.push({ valor: i })
    }
    return newArray;
}
//console.log(arrayObjects(5))

//9.Arrays de objetos 2

function arrayObjects2(num, str) {
    let newArray = [];
    for (var i = 1; i <= num; i++) {
        newArray.push({ [str]: i })
    }
    return newArray;
}
//console.log(arrayObjects2(5,'olá'))
