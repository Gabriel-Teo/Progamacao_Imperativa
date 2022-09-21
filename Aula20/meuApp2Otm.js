let Espectadores = require('./modulos/espectadores');
let Espectador = require('./modulos/newEspectadores');

function InserirEspec(qtd) {
    var newArray = Espectadores
    for(var i = 0; i <= qtd; i++){
        var opiniaoRandom = Math.round(Math.random() * (3 - 1) + 1);
        var idadeRandom = Math.round(Math.random() * (99 - 35) + 35);
        Espectadores.push(new Espectador(opiniaoRandom, idadeRandom))
    }
    return newArray
}

console.log(Espectadores)

let espectadoresRandom =  InserirEspec(100)

console.log(espectadoresRandom)

let lista = {
    mediaIdade: function (array) {
        let media = 0;
        let qtdOpina = 0;
        let idadeSoma = 0;

        for (i = 0; i < array.length; i++) {
            var Aux = array[i];
            if (Aux.opiniao === 3) {
                qtdOpina++;
                idadeSoma += Aux.idade;
            }
        }
        media = idadeSoma / qtdOpina;
        return media
    },

    qtdRegular: function (array) {
        let qtd = 0;
        for (i = 0; i < array.length; i++) {
            var Aux = array[i];
            if (Aux.opiniao === 1) {
                qtd++
            }
        }
        return qtd;
    },

    bomPercent: function (array) {
        let qtd = 0;
        for (i = 0; i < array.length; i++) {
            var Aux = array[i];
            if (Aux.opiniao === 2) {
                qtd++
            }
        }
        return (qtd * 100) / array.length
    }
}

console.log(lista.mediaIdade(espectadoresRandom));
console.log(lista.qtdRegular(espectadoresRandom));
console.log(lista.bomPercent(espectadoresRandom));