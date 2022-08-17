function podeSubir (altura, acompanhado) {
    let podeSubir = false
    let elegivel = altura >= 1.40 && altura <= 2.0
    let deveacompanhado = altura > 1.20 && altura < 1.40

    if (elegivel || (deveacompanhado && acompanhado)) {
        podeSubir = true
    } else if (altura < 1.20) {
        podeSubir = false
    }

    if ((elegivel && podeSubir) || (deveacompanhado && podeSubir && acompanhado)) {
        console.log("Acesso Autorizado")
    } else if (deveacompanhado && podeSubir == false) {
        console.log("Acesso autorizado somente com acompanhante");
    } else {
        console.log("Acesso Negado");
    }
    return ''
}

//controles manuais
var altura = 1.20;
var acompanhado = true;
console.log(podeSubir(altura, acompanhado));