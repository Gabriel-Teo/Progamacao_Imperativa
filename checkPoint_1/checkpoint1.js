//variaveis (globais por enquanto)
var pipoca = 10;
var macarrao = 8;
var carne = 15;
var feijao = 12;
var brigadeiro = 8;
//variaveis do menu
var padrao = null;
var menu = null;
var alterar = null;

//controles do microondas
//caso for selecionar uma opção que não seja do menu escreva uma 'string'
menu = pipoca;
alterar = 16;

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

selecionar(menu)
var resultado = ligar(alterar)
console.log(resultado);