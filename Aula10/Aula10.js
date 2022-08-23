 let numbers =[22, 33, 54, 66, 72]
 console.log(numbers[numbers.length]); // ta errado? undefined 

 let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
 console.log(grupoDeAmigos[1][0]) // vai aparecer spiderman


//  let str = 'uma string qualquer'
//  let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
//  console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]) // 5

// ARRAY INVERTIDO


//array
let array = ['Gabriel', 'Gustavo', 'Rafaela', 'Ana', 'Felipe'];
console.log(array);

//imprimir inverso
function imprimirInverso(array) {
    let length = array.length;
    for (var i = length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
    return ''
}
console.log(imprimirInverso(array));

//inverter
function inverter(array) {
    let inverter = array.reverse();
    return inverter
}
console.log(inverter(array));


//SOMAR
let soma1 = [1,2,3]
let soma2 = [10,3,10,4]
let soma3 = [-5,100]
function somarArray(array) {
    let arraySoma = array;
    let somar = 0;
    for (var i = 0; i < arraySoma.length; i++) {
        somar += arraySoma[i];
    }
    return somar
}
console.log(somarArray(soma1), somarArray(soma2), somarArray(soma3));

//ARRAY.JOIN
let arrayJoin = ['t','e','s','t','e']
console.log(arrayJoin.join(''));

//COLEÇÕES DE FILMES
//variaveis globais
var filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
var animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];
// TUDO MAIUSCULA 
function arrayToUpperCase(array) { 
    let upper = array.map(element => {
        return element.toUpperCase();
      });
    return upper
}
console.log(arrayToUpperCase(filmes));

//junta arrays
function juntaArray(array0, array1) {
    let arr0 = arrayToUpperCase(array0);
    let arr1 = arrayToUpperCase(array1);
    for (var i = 0; i < arr1.length; i++) {
        arr0.push(arr1[i]);
    }
    return arr0
}
console.log(juntaArray(filmes, animacao));

let arrayJunta = juntaArray(filmes, animacao);

//deleta o jooj
var jogoIntruso = arrayJunta.pop()
console.log(jogoIntruso);
console.log(arrayJunta)

//compara score

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaArray(arr0,arr1) {
    if (arr0.length != arr1.length){
        return "False";
    } else {
        for (var i = 0; i < arr0.length;i++)
        if (arr0[i] != arr1[i])
         return "False";
         return "True";
    } 
}

console.log(comparaArray(asiaScores, euroScores));