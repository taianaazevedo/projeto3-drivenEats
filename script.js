let pratoEscolhido;
let valorPrato;
let nomePrato;
let valorBebida;
let nomeBebida;
let valorDoce;
let nomeDoce;

function escolherPrato(botao){
    const botaoSelecionado = document.querySelector('.pratos .selecionado');
    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }
    botao.classList.toggle('selecionado'); // o que eu cliquei ta com essa classe

    const nome = document.querySelector('.pratos .selecionado .nome-prato').innerHTML;
    nomePrato = nome;
    const valor = document.querySelector('.pratos .selecionado .valor').innerHTML;
    valorPrato = Number(valor.replace('R$ ','').replace(',','.'));

    pratoEscolhido = botao.innerHTML;

    fecharPedido();
}

let bebidaEscolhida;

function escolherBebida(botao2){
    const botaoSelecionado2 = document.querySelector('.bebidas .selecionado')
    if (botaoSelecionado2 !== null){
        botaoSelecionado2.classList.remove('selecionado');
    }
    botao2.classList.toggle('selecionado');

    const nome = document.querySelector('.bebidas .selecionado .nome-bebida').innerHTML;
    nomeBebida = nome;
    const valor = document.querySelector('.bebidas .selecionado .valor').innerHTML;
    valorBebida = Number(valor.replace('R$ ','').replace(',','.'));

    bebidaEscolhida = botao2.innerHTML;

    fecharPedido();
}

let doceEscolhido;

function escolherDoce(botao3){
    const botaoSelecionado3 = document.querySelector('.sobremesa .selecionado')
    if (botaoSelecionado3 !== null){
        botaoSelecionado3.classList.remove('selecionado');
    }
    botao3.classList.toggle('selecionado');

    const nome = document.querySelector('.sobremesa .selecionado .nome-doce').innerHTML;
    nomeBebida = nome;
    const valor = document.querySelector('.sobremesa .selecionado .valor').innerHTML;
    valorBebida = Number(valor.replace('R$ ','').replace(',','.'));


    doceEscolhido = botao3.innerHTML;

    fecharPedido();
}

function fecharPedido(){
    // const valorTotal = valorPrato + bebda + sobremesa //number
    // const valorTotal = 
    // const valortTotalFormatado = valorTotal.toString().replace('.',',')
    // const texto = `Vc escolher o prato:${nomePrato} com o valorTotal:${valorTotal}`
    // console.log(valortTotalFormatado)

    if(pratoEscolhido !== undefined && bebidaEscolhida !== undefined && doceEscolhido !== undefined){
                const botaoFechar = document.querySelector('.botao');
                botaoFechar.classList.add('escondido'); 
                botaoFechar.innerHTML = "Fechar Pedido";
                    
        }
}



