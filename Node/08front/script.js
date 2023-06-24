// Vetor
let pessoas = [];

// Id da pessoa (Responsável por alterar e remover)
let id;

// Listar todas as pessoas
function listar(){

    // Requisição
    fetch("http://localhost:3000/pessoas")
    .then(retorno => retorno.json())
    .then(retorno_convertido => pessoas = retorno_convertido)
    .then(() => {

        // Obter tbody
        let tabela = document.getElementById("tabela");

        // Limpar conteúdos do tbody
        tabela.innerHTML = "";

        // Laço de repetição
        for(let indice=0; indice<pessoas.length; indice++){

            // Criar linha de tabela
            let linha = tabela.insertRow(-1);

            // Criar colunas
            let colunaLinha = linha.insertCell(0);
            let colunaNome = linha.insertCell(1);
            let colunaIdade = linha.insertCell(2);
            let colunaSelecionar = linha.insertCell(3);

            // Conteúdos das colunas
            colunaLinha.innerText = indice+1;
            colunaNome.innerText  = pessoas[indice].nome;
            colunaIdade.innerText = pessoas[indice].idade;
            colunaSelecionar.innerHTML = `<button class="btn btn-success" onClick="selecionar(${indice})">Selecionar</button>`;

        }

    });

}

// Selecionar
function selecionar(posicao){
    
    // Exibir os dados nos inputs
    document.getElementById("nome").value = pessoas[posicao].nome;
    document.getElementById("idade").value = pessoas[posicao].idade;

    // Especificar o id da pessoa
    id = pessoas[posicao].id;

    // Visibilidade dos botões
    document.getElementById("btnCadastrar").style.display = "none";
    document.getElementById("btnAlterar").style.display   = "inline-block";
    document.getElementById("btnRemover").style.display   = "inline-block";
    document.getElementById("btnCancelar").style.display  = "inline-block";

}

// Cadastrar
function cadastrar(){

    // Obter os elementos inputs
    let nome = document.getElementById("nome");
    let idade = document.getElementById("idade");

    // Criar objeto
    let obj = {
        "nome":nome.value,
        "idade":idade.value
    }

    // Requisição
    fetch("http://localhost:3000/pessoas", {
        headers:{
           "Content-type":"application/json" 
        },
        method:"POST",
        body:JSON.stringify(obj)
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
        // Adicionar a nova pessoa no vetor
        pessoas.push(retorno_convertido);

        // Atualizar a tabela
        listar();

        // Limpar campos
        nome.value = "";
        idade.value = "";

        // Deixar o cursor no campo nome
        nome.focus();
    });
}

// Visibilidade dos botões e limpeza dos campos
function reset_crud(){

    // Limpar os conteúdos dos inputs
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";

    // Botões
    document.getElementById("btnCadastrar").style.display = "inline-block";
    document.getElementById("btnAlterar").style.display   = "none";
    document.getElementById("btnRemover").style.display   = "none";
    document.getElementById("btnCancelar").style.display  = "none";

}

// Remover
function remover(){

    // Requisição
    fetch('http://localhost:3000/pessoas/'+id, {
        method:"DELETE"
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

        // Retornar a posição do código contido no vetor
        let posicaoRemocao = pessoas.findIndex(obj => {return obj.id == id});

        // Remover pessoa do vetor
        pessoas.splice(posicaoRemocao, 1);

        // Atualizar a tabela
        listar();

        // Reset
        reset_crud();

    });

}

// Alterar
function alterar(){

    // Obter o nome e a idade
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    // Objeto
    let obj = {
        "nome":nome,
        "idade":idade
    }

    // Requisição
    fetch("http://localhost:3000/pessoas/"+id, {
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(obj)
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

        // Retornar a posição do código contido no vetor
        let posicaoAlteracao = pessoas.findIndex(obj => {return obj.id == id});

        // Alterar pessoa do vetor
        pessoas[posicaoAlteracao] = retorno_convertido;
        
        // Atualizar a tabela
        listar();

        // Reset
        reset_crud();

    });
}