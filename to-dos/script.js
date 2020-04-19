var container = document.querySelector('#container');
var novoItem = document.querySelector('#novoItem');
var lista = document.querySelector('#lista');
var botaoAdicionar = document.querySelector('#botaoAdicionar');
botaoAdicionar.setAttribute('onclick', 'adicionar()');

var itens = JSON.parse(localStorage.getItem('lista'))||[];

renderizar();

function adicionar(){

    var texto = novoItem.value;
    itens.push(texto);
    renderizar();
    salvarStorage();

}

function excluir (pos){
    itens.splice(pos, 1);
    renderizar();
    salvarStorage();
}

function renderizar(){
    lista.innerHTML = "";
    novoItem.value = "";

    for (item of itens){
        var itemLista = document.createElement('li');
        var textoItem = document.createTextNode(item);
        var linkExcluir = document.createElement('a');
        textoExcluir = document.createTextNode(' Excluir');
        linkExcluir.setAttribute('href', '#');
        linkExcluir.setAttribute("onclick", "excluir("+itens.indexOf(item)+")");
        linkExcluir.appendChild(textoExcluir);
        itemLista.appendChild(textoItem);
        itemLista.appendChild(linkExcluir);
        lista.appendChild(itemLista);
    }

}

function salvarStorage(){
    localStorage.setItem('lista', JSON.stringify(itens));
}