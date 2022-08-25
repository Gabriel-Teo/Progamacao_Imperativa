var filmes = ["star wars", "totoro", "rocky", "pulp fiction", "a vida é bela"]
var animacao = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

for (var i = 0; i < filmes.length; i++) {
    filmes[i] = filmes[i].toUpperCase();
};

console.log(filmes);

var arrayJunto = null;
function juntarArray(arr0, arr1) {
    for (var i = 0; i < arr1.length; i++) {
        arr0.push(arr1[i].toUpperCase());
    }
    return arrayJunto = arr0;
};
juntarArray(filmes, animacao);
console.log(arrayJunto);

let tiraJogo = arrayJunto.pop();
console.log(tiraJogo);
console.log(arrayJunto);


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function comparar(arr0, arr1) {
    let resultadoCompara = [];
    for (var i = 0; i < arr1.length; i++) {
        resultadoCompara[i] = arr0[i] === arr1[i];
    };
    return resultadoCompara
}
console.log(comparar(asiaScores, euroScores));