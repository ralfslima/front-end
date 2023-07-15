// Importar
import React from 'react';
import ReactDOM from 'react-dom';

// Componente
class Componente extends React.Component{

    // Construtor
    constructor(props){
        super(props);

        this.state = {
            produtos : [
                {'nome':'Arroz', 'valor':8},
                {'nome':'Feijão', 'valor':7},
                {'nome':'Farinha de trigo', 'valor':14},
                {'nome':'Macarrão', 'valor':11},
                {'nome':'Ervilha', 'valor':3}
            ]
        }
    }

    // Render
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Valor</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.produtos.map((obj, linha) => (
                        <tr>
                            <td>{linha + 1}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

}

// Exportar
ReactDOM.render(<Componente />, document.getElementById('root'));