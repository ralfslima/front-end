// Importar o módulo React
import React from 'react';

// Classe
export default class Tabela extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {termo:''}
    }

    // Render
    render(){
        return(
            <div className='tabela'>

                {/* Pesquisa */}
                <input type='text' placeholder='Informe um nome' className='form-control' onChange={(campo) => {this.setState({termo:campo.target.value})}} />

                {/* Tabela */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Cidade</th>
                            <th>Remover</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.dados.filter(obj => obj.nome.toLowerCase().includes(this.state.termo.toLowerCase())).map((obj, linha) => (
                            <tr>
                                <td>{linha+1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cidade}</td>
                                <td><button className="btn btn-danger" onClick={() => {this.props.acao(linha)}}>Remover</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

}