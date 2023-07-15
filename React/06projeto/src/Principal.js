// Importar o módulo React
import React from 'react';

// Importar o formulário
import Formulario from './Formulario';

// Importar a tabela
import Tabela from './Tabela';

// Importar CSS
import './estilos.css';

// Classe
export default class Principal extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            cidade: '',
            vetor: []
        }
    }

    // Função de cadastro
    cadastro = () => {

        // Objeto
        let pessoa = {
            'nome':this.state.nome,
            'cidade':this.state.cidade
        }

        // Criar uma cópia do vetor
        let vetor_temp = [...this.state.vetor];

        // Adicionar o novo registro no vetor temporário
        vetor_temp.push(pessoa);

        // Alterar o vetor
        this.setState({vetor:vetor_temp});

        // Limpar elementos state
        this.setState({nome:'', cidade:''})

        //alert(JSON.stringify(pessoa));
    }

    // Função de formulário (input)
    teclado = (obj) => {
        this.setState({[obj.target.name]: obj.target.value});
    }

    // Função para remover
    remover = (indice) => {
        alert(indice);
    }

    // Render
    render(){
        return(
            <div>
                <Formulario acao={this.cadastro} acaoTeclado={this.teclado} nome={this.state.nome} cidade={this.state.cidade} />

                {/* <p>Nome: {this.state.nome}</p>
                <p>Cidade: {this.state.cidade}</p>
                <p>{JSON.stringify(this.state.vetor)}</p> */}

                <Tabela dados={this.state.vetor} acao={this.remover} />
            </div>
        )
    }

}