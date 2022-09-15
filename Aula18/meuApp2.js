let espectadores = [
    {
        idade: 80,
        opniao: 1
    },
    {
        idade: 70,
        opniao: 2
    },
    {
        idade: 68,
        opniao: 3
    },
    {
        idade: 35,
        opniao: 1
    },
    {
        idade: 56,
        opniao: 1
    },
    {
        idade: 92,
        opniao: 1
    },
    {
        idade: 46,
        opniao: 2
    },
    {
        idade: 39,
        opniao: 3
    },
    {
        idade: 66,
        opniao: 1
    },
    {
        idade: 55,
        opniao: 1
    },
    {
        idade: 88,
        opniao: 1
    },
    {
        idade: 99,
        opniao: 2
    },
    {
        idade: 44,
        opniao: 3
    },
    {
        idade: 33,
        opniao: 1
    },
    {
        idade: 51,
        opniao: 1
    }
]

//funcao para tirar a media da idade das opniões 'otimo'
const mediaIdade = array => {
    let media = 0;
    let qtdOpina = 0;
    let idadeSoma = 0;

    for (i = 0; i < array.length; i++) {
        var Aux = array[i];
        if (Aux.opniao === 3) {
            qtdOpina++;
            idadeSoma += Aux.idade;
        }
    }
    media = idadeSoma / qtdOpina;
    return media
};
console.log(mediaIdade(espectadores))

//qtd de pessoas que tiveram opinião regular
const qtdRegular = array => {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
        var Aux = array[i];
        if (Aux.opniao === 1) {
            qtd++
        }
    }
    return qtd;
};
console.log(qtdRegular(espectadores));

//porcentagem de pessoas que votaram 'otimo'
const bomPercent = array => {
    let qtd = 0;
    for (i = 0; i < array.length; i++) {
        var Aux = array[i];
        if (Aux.opniao === 2) {
            qtd++
        }
    }
    return (qtd * 100) / array.length
};
console.log(bomPercent(espectadores));