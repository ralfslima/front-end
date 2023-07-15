// Importar o módulo React
import React from 'react';

// Classe
export default class Formulario extends React.Component{

    // Construtor
    constructor(props){
        super(props);
    }

    // Render
    render(){
        return(
            <form>
                <input type='text'   value={this.props.nome}    name='nome'   className='form-control' placeholder='Nome'   onChange={this.props.acaoTeclado} />
                <input type='text'   value={this.props.cidade}  name='cidade' className='form-control' placeholder='Cidade' onChange={this.props.acaoTeclado} />
                <input type='button' value='Cadastrar' onClick={this.props.acao} className='btn btn-primary' />
            </form>
        )
    }

}