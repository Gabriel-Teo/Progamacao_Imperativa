let estudantes = [
    {
        nome: 'Gabriel Teodoro',
        qtdFaltas: 1,
        notas: [4, 3, 10, 9],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Biral',
        qtdFaltas: 8,
        notas: [8, 6, 8, 9],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Simões',
        qtdFaltas: 2,
        notas: [6, 6, 6, 10],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    },
    {
        nome: 'Gustavo',
        qtdFaltas: 0,
        notas: [4, 6, 10, 7],
        calcMedia: function () {
            let notasTotal = 0
            let media = 0
            for (i = 0; i < this.notas.length; i++) {
                notasTotal += this.notas[i]
            }
            media = notasTotal / this.notas.length;
            return media
        },
        faltas: function () {
            this.qtdFaltas++
        }
    }
]

module.exports = estudantes