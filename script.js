function escolherPrato(botao){
    const botaoSelecionado = document.querySelector('.pratos .selecionado');
    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }
    botao.classList.toggle('selecionado');
}

function escolherBebida(botao2){
    const botaoSelecionado2 = document.querySelector('.bebidas .selecionado')
    if (botaoSelecionado2 !== null){
        botaoSelecionado2.classList.remove('selecionado');
    }
    botao2.classList.toggle('selecionado');
}

function escolherDoce(botao3){
    const botaoSelecionado3 = document.querySelector('.sobremesa .selecionado')
    if (botaoSelecionado3 !== null){
        botaoSelecionado3.classList.remove('selecionado');
    }
    botao3.classList.toggle('selecionado');
}

function fecharPedido(){
    alert('oi')
}

