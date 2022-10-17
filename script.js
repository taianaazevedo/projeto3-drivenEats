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
    nomeDoce = nome;
    const valor = document.querySelector('.sobremesa .selecionado .valor').innerHTML;
    valorDoce = Number(valor.replace('R$ ','').replace(',','.'));

    doceEscolhido = botao3.innerHTML;

    fecharPedido();
}

function fecharPedido(){
    if(pratoEscolhido !== undefined && bebidaEscolhida !== undefined && doceEscolhido !== undefined){
                const botaoFechar = document.querySelector('.botao');
                botaoFechar.classList.add('escondido'); 
                botaoFechar.innerHTML = "Fechar Pedido";
                    
        }

    const valorTotal = valorPrato + valorBebida + valorDoce //number
    const valorTotalCompleto = valorTotal.toFixed(2).toString().replace('.',',');
    
    console.log(valorTotalCompleto);
    
    const texto = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${nomePrato} \n
    - Bebida: ${nomeBebida} \n
    - Sobremesa: ${nomeDoce} \n
     Total: R$ ${valorTotalCompleto}`;

    console.log(texto);
    

}

    

    



