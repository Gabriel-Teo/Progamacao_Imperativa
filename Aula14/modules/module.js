const calculadora = {
    soma: function (num1, num2) {
        return num1 + num2;
    },

    subtrair: function (num1, num2) {
        return num1 + num2;
    },

    dividir: function (num1, num2) {
        return num1 / num2;
    },

    multiplicar: function (num1, num2) {
        return num1 * num2;
    },

    quadradoNum: function (power) {
        return this.multiplicar(power, power)
    },

    mediaDeTresNum: function (num1, num2, num3) {
        let rSomaTotal = this.soma(this.soma(num1, num2), num3);
        return this.dividir(rSomaTotal, 3)
    },

    porcentagem: function (num1, num2) {
        let rDivisao = this.dividir(num1, 100);
        return this.multiplicar(num2, rDivisao)
    },

    qualPorcento: function (num1, num2) {
        let rMulti = this.multiplicar(num1, 100);
        return this.dividir(rMulti, num2)
    },
};

module.exports = calculadora