let pratoEscolhido;

function escolherPrato(botao){
    const botaoSelecionado = document.querySelector('.pratos .selecionado');
    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }
    botao.classList.toggle('selecionado');

    pratoEscolhido = botao.innerHTML;

    fecharPedido()
}

let bebidaEscolhida;

function escolherBebida(botao2){
    const botaoSelecionado2 = document.querySelector('.bebidas .selecionado')
    if (botaoSelecionado2 !== null){
        botaoSelecionado2.classList.remove('selecionado');
    }
    botao2.classList.toggle('selecionado');

    bebidaEscolhida = botao2.innerHTML;

    fecharPedido()
}

let doceEscolhido;

function escolherDoce(botao3){
    const botaoSelecionado3 = document.querySelector('.sobremesa .selecionado')
    if (botaoSelecionado3 !== null){
        botaoSelecionado3.classList.remove('selecionado');
    }
    botao3.classList.toggle('selecionado');

    doceEscolhido = botao3.innerHTML;

    fecharPedido()
}

function fecharPedido(){
    if(pratoEscolhido !== undefined && bebidaEscolhida !== undefined && doceEscolhido !== undefined){
                const botaoFechar = document.querySelector('.botao');
                botaoFechar.classList.add('escondido'); 
                botaoFechar.innerHTML = "Fechar Pedido";
                    
        }
}



