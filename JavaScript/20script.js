// JSON de produtos
let vetor = [
    {'codigo': '1', 'nome':'Blusa Xadrez',          'valor':'139,90', 'imagem':'imagens/feminino/1.jpg',  'categoria':'feminino'},
    {'codigo': '2', 'nome':'Casaco Casual',         'valor':'218,80', 'imagem':'imagens/feminino/2.jpg',  'categoria':'feminino'},
    {'codigo': '3', 'nome':'Camisa Social',         'valor':'89,90',  'imagem':'imagens/feminino/3.jpg',  'categoria':'feminino'},
    {'codigo': '4', 'nome':'Camisa Bege',           'valor':'111,50', 'imagem':'imagens/feminino/4.jpg',  'categoria':'feminino'},
    {'codigo': '5', 'nome':'Blusa Estampada',       'valor':'59,90',  'imagem':'imagens/feminino/5.jpg',  'categoria':'feminino'},
    {'codigo': '6', 'nome':'Camisa de Malha',       'valor':'35,40',  'imagem':'imagens/feminino/6.jpg',  'categoria':'feminino'},
    {'codigo': '7', 'nome':'Camisa Xadrez',         'valor':'35,40',  'imagem':'imagens/masculino/1.jpg', 'categoria':'masculino'},
    {'codigo': '8', 'nome':'Suéter Azul',           'valor':'35,40',  'imagem':'imagens/masculino/2.jpg', 'categoria':'masculino'},
    {'codigo': '9', 'nome':'Camisa com Estampa',    'valor':'35,40',  'imagem':'imagens/masculino/3.jpg', 'categoria':'masculino'},
    {'codigo': '10', 'nome':'Camisa Base',          'valor':'35,40',  'imagem':'imagens/masculino/4.jpg', 'categoria':'masculino'},
    {'codigo': '11', 'nome':'Camisa Branca Casual', 'valor':'35,40',  'imagem':'imagens/masculino/5.jpg', 'categoria':'masculino'},
    {'codigo': '12', 'nome':'Camisa Social',        'valor':'35,40',  'imagem':'imagens/masculino/6.jpg', 'categoria':'masculino'},
    {'codigo': '13', 'nome':'Camisa Lilo Stitch',   'valor':'35,40',  'imagem':'imagens/infantil/1.jpg',  'categoria':'infantil'},
    {'codigo': '14', 'nome':'Camisa Sonic',         'valor':'35,40',  'imagem':'imagens/infantil/2.jpg',  'categoria':'infantil'},
    {'codigo': '15', 'nome':'Vestido Vermelho',     'valor':'35,40',  'imagem':'imagens/infantil/3.jpg',  'categoria':'infantil'},
    {'codigo': '16', 'nome':'Camisa Dinossauro',    'valor':'35,40',  'imagem':'imagens/infantil/4.jpg',  'categoria':'infantil'},
    {'codigo': '17', 'nome':'Camisa Minie',         'valor':'35,40',  'imagem':'imagens/infantil/5.jpg',  'categoria':'infantil'},
    {'codigo': '18', 'nome':'Vistido com Estampa',  'valor':'35,40',  'imagem':'imagens/infantil/6.jpg',  'categoria':'infantil'},
];

// JSON de produtos selecionados
let carrinho = [];


// Função para listar os produtos
let listar = (opcao) => {

    // Obter a DIV produtos
    let produtos = document.getElementById('produtos');

    // Limpar conteúdo da DIV produtos
    produtos.innerHTML = '';

    // Laço de repetição
    for(let i=0; i<vetor.length; i++){

        // Condicional
        if(opcao == vetor[i].categoria || opcao == "todos"){

            // Criar uma coluna
            let coluna = document.createElement('div');
            
            // Especificar classes na coluna
            coluna.classList.add('col-3');

            // Criar uma imagem
            let imagem = document.createElement('img');
            imagem.src = vetor[i].imagem;
            imagem.classList.add('img-fluid');

            // Criar o nome do produto
            let nomeProduto = document.createElement('p');
            nomeProduto.innerText = vetor[i].nome;

            // Criar o valor do produto
            let valorProduto = document.createElement('p');
            valorProduto.innerText = vetor[i].valor;

            // Criar um botão
            let botao = document.createElement('button');
            botao.classList.add('btn', 'btn-primary')
            botao.innerText = 'Adicionar';
            botao.addEventListener('click', () => {
                adicionar(vetor[i].codigo);
            });

            // Adicionar imagem e parágrafo na coluna
            coluna.appendChild(imagem);
            coluna.appendChild(nomeProduto);
            coluna.appendChild(valorProduto);
            coluna.appendChild(botao);

            // Adicionar coluna na linha
            produtos.appendChild(coluna);
        }

    }

}

// Função para adicionar produtos ao carrinho
let adicionar = (codigo) => {
   
    // Verificar se o código existe no carrinho de compras
    let indice = carrinho.findIndex(obj => { return obj.codigo == codigo });

    // Condicional
    if(indice == -1){
        let obj = {'codigo':codigo, 'quantidade':1}
        carrinho.push(obj);
    }else{
        let obj = carrinho[indice];
        obj.quantidade += 1;
        carrinho[indice] = obj;
    }

    // Atualizar produtos selecionados 
    itensSelecionados();
}

// Função para listar os itens selecionados (carrinho)
let itensSelecionados = () => {

    // Obter o elemento exibirCarrinho
    let exibirCarrinho = document.getElementById('exibirCarrinho');

    // Limpar conteúdos
    exibirCarrinho.innerHTML = '';

    // Laço
    for(let i=0; i<carrinho.length; i++){

        // Obter os dados do produto
        let produto = retornarProduto(carrinho[i].codigo);

        // Criar uma coluna
        let coluna = document.createElement('div');
        coluna.classList.add('col-6');

        // Criar a imagem
        let imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.classList.add('img-fluid');

        // Nome do produto
        let nomeProduto = document.createElement('p');
        nomeProduto.innerText = produto.nome;

        // Valor do produto
        let valorProduto = document.createElement('p');
        valorProduto.innerText = 'R$'+produto.valor;

        // Quantidade do produto
        let quantidadeProduto = document.createElement('p');
        quantidadeProduto.innerText = 'Quantidade:' + carrinho[i].quantidade;

        // Adicionar elementos na coluna
        coluna.appendChild(imagem);
        coluna.appendChild(nomeProduto);
        coluna.appendChild(valorProduto);
        coluna.appendChild(quantidadeProduto);

        // Adicionar na linha
        exibirCarrinho.appendChild(coluna);

    }

}

// Retornar um objeto do vetor através do código do produto
let retornarProduto = (codigo) => {

    let indice = vetor.findIndex(obj => {
        return obj.codigo == codigo;
    });

    return vetor[indice];

}

// Função para pesquisar produtos
let pesquisar = () => {

    // Obter o termo pesquisado
    let termo = document.getElementById('termo').value;

    // Obter a DIV produtos
    let produtos = document.getElementById('produtos');

    // Limpar conteúdo da DIV produtos
    produtos.innerHTML = '';

    // Laço de repetição
    for(let i=0; i<vetor.length; i++){

        // Condicional
        if(vetor[i].nome.toLocaleLowerCase().indexOf(termo.toLocaleLowerCase()) != -1){

            // Criar uma coluna
            let coluna = document.createElement('div');
            
            // Especificar classes na coluna
            coluna.classList.add('col-3');

            // Criar uma imagem
            let imagem = document.createElement('img');
            imagem.src = vetor[i].imagem;
            imagem.classList.add('img-fluid');

            // Criar o nome do produto
            let nomeProduto = document.createElement('p');
            nomeProduto.innerText = vetor[i].nome;

            // Criar o valor do produto
            let valorProduto = document.createElement('p');
            valorProduto.innerText = vetor[i].valor;

            // Criar um botão
            let botao = document.createElement('button');
            botao.classList.add('btn', 'btn-primary')
            botao.innerText = 'Adicionar';
            botao.addEventListener('click', () => {
                adicionar(vetor[i].codigo);
            });

            // Adicionar imagem e parágrafo na coluna
            coluna.appendChild(imagem);
            coluna.appendChild(nomeProduto);
            coluna.appendChild(valorProduto);
            coluna.appendChild(botao);

            // Adicionar coluna na linha
            produtos.appendChild(coluna);
        }

    }

}