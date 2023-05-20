// Vetor
let dados = [];

// Cadastrar dados (TEMP)
dados.push({'nome':'Alice',   'email':'alice.braga@yahoo.com',    'idade':26});
dados.push({'nome':'Bianca',  'email':'bianca.andrade@gmail.com', 'idade':34});
dados.push({'nome':'Charles', 'email':'charles_gomes@gmail.com',  'idade':37});
// document.write(dados.length);

// Variável para armazenar a posição do vetor
let posicaoVetor;

// Método para listar dados
function listar(){

    // Obter o elemento tabela
    let tabela = document.getElementById("tabela");

    // Remover todas as linhas e colunas
    tabela.innerHTML = "";

    // Laço de repetição
    for(let i=0; i<dados.length; i++){

        // Criar linha de tabela
        let linha = tabela.insertRow(-1);

        // Criar colunas
        let coluna1 = linha.insertCell(0);
        let coluna2 = linha.insertCell(1);
        let coluna3 = linha.insertCell(2);
        let coluna4 = linha.insertCell(3);
        let coluna5 = linha.insertCell(4);

        // Conteúdos das colunas
        coluna1.innerText = i+1;
        coluna2.innerText = dados[i].nome;
        coluna3.innerText = dados[i].email;
        coluna4.innerText = dados[i].idade;
        coluna5.innerHTML = `<button class="btn btn-success" onclick="selecionar(${i})">Selecionar</button>`;

    }

}

// Método para cadastrar
function cadastrar(){

    // Obter os elementos do formulário
    let nome  = document.getElementById("nome");
    let email = document.getElementById("email");
    let idade = document.getElementById("idade");

    // Validação
    if(nome.value == ""){
        alert("O campo nome precisar ser preenchido!");
        nome.focus();
    }else if(nome.value.length < 3){
        alert("Informe um nome válido!");
        nome.focus();
    }else if(email.value == ""){
        alert("O campo e-mail precisar ser preenchido!");
        email.focus();
    }else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        alert("Informe um e-mail válido!");
        email.focus();
    }else if(idade.value == ""){
        alert("O campo idade precisar ser preenchido!");
        idade.focus();
    }else if(isNaN(idade.value) == true){
        alert("O campo idade deve conter apenas números!");
        idade.focus();
    }else{

        // Cadastrar no vetor
        dados.push({
            "nome" :nome.value,
            "email":email.value,
            "idade":idade.value
        });

        // Atualizar tabela
        listar();

        // Limpar os inputs
        nome.value = "";
        email.value = "";
        idade.value = "";

        // Cursor no campo nome
        nome.focus();
    }

}

// Método para selecionar
function selecionar(indice){

    // Dispor o valor do índice na variável posicaoVetor
    posicaoVetor = indice;

    // Exibir os dados pessoais no formulário
    document.getElementById("nome").value  = dados[indice].nome;
    document.getElementById("email").value = dados[indice].email;
    document.getElementById("idade").value = dados[indice].idade;

    // Visibilidade dos botões
    document.getElementById("btnCadastrar").style.display = "none";
    document.getElementById("btnAlterar").style.display = "inline-block";
    document.getElementById("btnRemover").style.display = "inline-block";
    document.getElementById("btnCancelar").style.display = "inline-block";

}

// Método para cancelar
function cancelar(){

    // Limpar inputs
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("idade").value = "";

    // Visibilidade dos botões
    document.getElementById("btnCadastrar").style.display = "inline-block";
    document.getElementById("btnAlterar").style.display = "none";
    document.getElementById("btnRemover").style.display = "none";
    document.getElementById("btnCancelar").style.display = "none";

}

// Método para excluir
function excluir(){

    // Remover do vetor
    dados.splice(posicaoVetor, 1);

    // Atualizar a tabela
    listar();

    // Limpar os campos e trabalhar com a visibilidade dos botões
    cancelar();

}

// Método para alterar
function alterar(){

    // Obter os elementos do formulário
    let nome  = document.getElementById("nome");
    let email = document.getElementById("email");
    let idade = document.getElementById("idade");

    // Validação
    if(nome.value == ""){
        alert("O campo nome precisar ser preenchido!");
        nome.focus();
    }else if(nome.value.length < 3){
        alert("Informe um nome válido!");
        nome.focus();
    }else if(email.value == ""){
        alert("O campo e-mail precisar ser preenchido!");
        email.focus();
    }else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        alert("Informe um e-mail válido!");
        email.focus();
    }else if(idade.value == ""){
        alert("O campo idade precisar ser preenchido!");
        idade.focus();
    }else if(isNaN(idade.value) == true){
        alert("O campo idade deve conter apenas números!");
        idade.focus();
    }else{

        // Alterar dados do vetor
        let pessoa = {
            "nome" :nome.value,
            "email":email.value,
            "idade":idade.value
        }

        dados[posicaoVetor] = pessoa;

        // Limpar campos e visibilidade dos botões
        cancelar();

        // Atualizar tabela
        listar();

        // Limpar os inputs
        nome.value = "";
        email.value = "";
        idade.value = "";

        // Cursor no campo nome
        nome.focus();
    }

}





