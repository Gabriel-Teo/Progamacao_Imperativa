//variaveis opcoes
var pipoca = 10;
var macarrao = 8;
var carne = 15;
var feijao = 12;
var brigadeiro = 8;
//variaveis menu/funcionamento
var padrao = null;
var menu = null;
var alterar = null;

//controles do microondas
menu = uranio;
alterar = 10;
// verifique seu log para ver o resultado

//funcao selecionar: seleciona as opções e retorna falso caso selecione algo errado (nome autoexplicativo)
function selecionar (opcao) {
    switch (opcao) {
        case pipoca:
            padrao = pipoca
            break;
        case macarrao:
            padrao = macarrao;
            break;
        case carne:
            padrao = carne
            break;
        case feijao:
            padrao = feijao
            break;
        case brigadeiro:
            padrao = brigadeiro
            break;
        default:
            padrao = false;
    }
}

//funcao ligar vai exibir os textos necessarios de acordo com o resultado que vier da function selecionar()
function ligar(alteracao) {
    alteracao === 0 ? alteracao = padrao: '';

    if (padrao == false) {
        console.log("Prato inexistente.");
        return ''
    }else if (alteracao >= (padrao*2) && alteracao < (padrao*3)) {
        console.log("sua comida queimou!");
    } else if (alteracao < padrao) {
        console.log("tempo insuficiente!");
    } else if (alteracao >= (padrao*3)) {
        console.log("KATCHABUMMMM!!!! *SONS DE GRITOS*");
    } else {
        console.log("Prato pronto, bom apetite!");
    }
    return ''
}

//display no Log
selecionar(menu)
var resultado = ligar(alterar)
console.log(resultado);